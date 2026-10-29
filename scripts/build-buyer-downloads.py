from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
pdfmetrics.registerFont(TTFont("TontonSans", "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"))
pdfmetrics.registerFont(TTFont("TontonSans-Bold", "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"))
from reportlab.lib.colors import HexColor,white
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph,Table,TableStyle
from reportlab.lib.utils import ImageReader
from PIL import Image
from pypdf import PdfReader
import json, subprocess, shutil
ROOT=Path(__file__).resolve().parents[1]; OUT=ROOT/'output/pdf'; TMP=ROOT/'tmp/pdfs'; TMP.mkdir(parents=True,exist_ok=True)
W,H=595.28,841.89; M=43; CW=W-2*M
INK=HexColor('#142329'); RED=HexColor('#de1937'); MUTED=HexColor('#53656c'); LINE=HexColor('#d7e0e2'); PAPER=HexColor('#f1f5f4')
body=ParagraphStyle('Body',fontName='TontonSans',fontSize=10,leading=14,textColor=INK)
small=ParagraphStyle('Small',parent=body,fontSize=8,leading=11)
heading=ParagraphStyle('Heading',parent=body,fontName='TontonSans-Bold',fontSize=18,leading=22)
class Doc:
 def __init__(self,name,title,total):
  self.path=OUT/name; self.c=canvas.Canvas(str(self.path),pagesize=(W,H),pageCompression=1);self.title=title;self.total=total;self.page=0;self.fields=[]
  self.c.setTitle(title);self.c.setAuthor('Tontonsports (Shenzhen) Co., Ltd.');self.c.setSubject('Custom fightwear buyer resource | English | v1.0 | 2026-10-29')
 def start(self,kicker,title,subtitle):
  self.page+=1;c=self.c;c.setFillColor(INK);c.rect(0,H-37,W,37,fill=1,stroke=0);c.setFillColor(white);c.setFont('TontonSans-Bold',14);c.drawString(M,H-25,'TONTON');c.setFont('TontonSans',8);c.drawRightString(W-M,H-24,'CUSTOM FIGHTWEAR / BUYER RESOURCES')
  self.y=H-65;self.p(kicker.upper(),8,RED,True);self.p(title,24,INK,True,29);self.p(subtitle,10,MUTED,False,14);self.y-=10
 def p(self,text,size=10,color=INK,bold=False,leading=None,width=None,x=None):
  style=ParagraphStyle('p',fontName='TontonSans-Bold' if bold else 'TontonSans',fontSize=size,leading=leading or size*1.4,textColor=color)
  p=Paragraph(text,style);w,h=p.wrap(width or CW,800);assert self.y-h>61,(self.page,text,self.y,h);p.drawOn(self.c,x or M,self.y-h);self.y-=h+9;return h
 def section(self,title):
  self.y-=6;self.p(title,13,INK,True,17)
 def note(self,text):
  p=Paragraph(text,small);_,h=p.wrap(CW-24,800);assert self.y-h-22>61
  self.c.setFillColor(PAPER);self.c.rect(M,self.y-h-20,CW,h+20,fill=1,stroke=0);p.drawOn(self.c,M+12,self.y-h-10);self.y-=h+31
 def field(self,name,label,height=25,x=None,width=None):
  x=M if x is None else x;width=CW if width is None else width;c=self.c;c.setFillColor(MUTED);c.setFont('TontonSans-Bold',8);c.drawString(x,self.y,label)
  c.acroForm.textfield(name=name,tooltip=label,x=x,y=self.y-height-7,width=width,height=height,borderWidth=.7,borderColor=LINE,fillColor=white,textColor=INK,fontName='Courier',fontSize=10,fieldFlags='multiline' if height>30 else '',forceBorder=True)
  self.fields.append(name);self.y-=height+26;assert self.y>60,(name,self.y)
 def pair(self,n1,l1,n2,l2,height=25):
  y=self.y;self.field(n1,l1,height,width=(CW-16)/2);self.y=y;self.field(n2,l2,height,x=M+(CW+16)/2,width=(CW-16)/2)
 def choice(self,name,label,options,value='Not checked',width=None,x=None):
  x=M if x is None else x;width=CW if width is None else width;c=self.c;c.setFillColor(MUTED);c.setFont('TontonSans-Bold',8);c.drawString(x,self.y,label)
  c.acroForm.choice(name=name,tooltip=label,options=options,value=value,x=x,y=self.y-33,width=width,height=25,fontName='Courier',fontSize=9,borderWidth=.7,borderColor=LINE,fillColor=white,textColor=INK,fieldFlags='combo',forceBorder=True);self.fields.append(name);self.y-=51
 def table(self,cols,rows,widths=None):
  data=[[Paragraph(str(s),ParagraphStyle('cell',parent=small,fontName='TontonSans-Bold',textColor=white)) for s in cols]]+[[Paragraph(str(s),small) for s in row] for row in rows]
  t=Table(data,colWidths=widths or [CW/len(cols)]*len(cols),hAlign='LEFT');t.setStyle(TableStyle([('BACKGROUND',(0,0),(-1,0),INK),('VALIGN',(0,0),(-1,-1),'TOP'),('GRID',(0,0),(-1,-1),.5,LINE),('ROWBACKGROUNDS',(0,1),(-1,-1),[white,PAPER]),('LEFTPADDING',(0,0),(-1,-1),9),('RIGHTPADDING',(0,0),(-1,-1),9),('TOPPADDING',(0,0),(-1,-1),9),('BOTTOMPADDING',(0,0),(-1,-1),9)]));_,h=t.wrap(CW,700);assert self.y-h>64,(self.page,h,self.y);t.drawOn(self.c,M,self.y-h);self.y-=h+15
 def photo(self,path,caption,height=180):
  im=Image.open(path);iw,ih=im.size;scale=min(CW/iw,height/ih);w=iw*scale;h=ih*scale
  self.c.setFillColor(PAPER);self.c.rect(M,self.y-height,CW,height,fill=1,stroke=0);self.c.drawImage(str(path),M+(CW-w)/2,self.y-height+(height-h)/2,w,h,mask='auto');self.y-=height+7;self.p(caption,8,MUTED)
 def photo_pair(self,p1,p2,cap1,cap2,height=175):
  width=(CW-15)/2;y=self.y
  for i,(path,cap) in enumerate([(p1,cap1),(p2,cap2)]):
   x=M+i*(width+15);im=Image.open(path);iw,ih=im.size;scale=min(width/iw,height/ih);w=iw*scale;h=ih*scale;self.c.setFillColor(PAPER);self.c.rect(x,y-height,width,height,fill=1,stroke=0);self.c.drawImage(str(path),x+(width-w)/2,y-height+(height-h)/2,w,h,mask='auto');p=Paragraph(cap,small);_,hh=p.wrap(width,70);p.drawOn(self.c,x,y-height-8-hh)
  self.y=y-height-53;assert self.y>64
 def link(self,label,url):
  self.p('<link href="'+url+'" color="#ba1430"><u>'+label+'</u></link>',9)
 def end(self):
  c=self.c;c.setStrokeColor(LINE);c.line(M,49,W-M,49);c.setFillColor(MUTED);c.setFont('TontonSans',7);c.drawString(M,36,'Tontonsports (Shenzhen) Co., Ltd. | v1.0 | 29 Oct 2026 | English');c.drawRightString(W-M,36,f'{self.page} / {self.total}');c.drawString(M,24,'tontongear.com  |  gary@tontonsportswear.com  |  +86 17722438678');c.linkURL('https://www.tontongear.com/resources',(M,19,W-M,32),relative=0);c.showPage()
 def save(self):
  assert self.page==self.total;self.c.save();r=PdfReader(self.path);assert len(r.pages)==self.total
  assert set((r.get_fields() or {}).keys())==set(self.fields)
  return dict(file=self.path.name,pages=self.total,fields=len(self.fields),bytes=self.path.stat().st_size)
# Interactive project brief: blank fields, no assumed commitments.
d=Doc('tonton-custom-fightwear-project-brief-v1.pdf','Custom Fightwear Project Brief',2)
d.start('01 / Fillable project worksheet','Custom Fightwear<br/>Project Brief','For rash guards, MMA / grappling shorts, training shorts and coordinated sets.')
d.note('Download and save a local copy before typing. Complete the fields in a PDF reader that supports forms, then save and attach the file to your inquiry. Blank fields mean not yet confirmed. Do not enter payment or identity-document details.')
d.section('1. Contact & project reference')
d.pair('company','Brand / gym / company','contact','Contact name')
d.pair('email','Business email','phone','WhatsApp / phone (optional)')
d.pair('project','Project name / reference','destination','Delivery country / city')
d.section('2. Product direction')
d.choice('product','Main product',['Choose a product','Rash guard','MMA / grappling shorts','Training shorts','Coordinated top + shorts set','Other / to discuss'],'Choose a product')
d.field('reference','Reference product URL / style code',35)
d.field('use','Intended sport, wearer group and fit direction',45)
d.field('priorities','Top priorities: material, coverage, movement, branding or other details',45)
d.note('A product photograph can start the discussion. Physical fit, fabric and decoration are confirmed through sampling. A mockup does not establish finished-garment performance.')
d.end()
d.start('02 / Order scope & approvals','Define the order scope','Use one reference for each distinct style or design; attach a separate size allocation if needed.')
d.section('3. Quantities, sizes & artwork')
d.pair('quantity','Estimated total quantity (pcs)','colorways','Number / names of colorways')
d.field('allocation','Size allocation by color / design (example: Black S 10, M 20, L 10)',45)
d.field('fabric','Main fabric, liner / mesh and preferred composition / GSM if known',38)
d.field('build','Construction: sleeve, hem, split, gusset, liner, waist / closure',38)
d.field('artwork','Artwork status, logo files and placement priorities',38)
d.field('packaging','Private labels, care / size labels and packaging requirements',38)
d.pair('target','Requested delivery date (not a confirmed promise)','sample','Sample route / approval contact')
d.field('openitems','Questions, required tests, target budget or unresolved details',38)
d.note('Selected custom projects start from 10 pieces; minimums by style, design, color and size mix require written confirmation. The 3-7 day sample target starts after usable artwork and details are confirmed; sourcing and revisions may extend it. Request a written quote for all charges and delivery scope.')
d.link('Submit your project online','https://www.tontongear.com/project-builder?source=download-project-brief')
d.end();a=d.save()
# Interactive approval record, not a pre-issued certificate.
d=Doc('tonton-sample-approval-checklist-v1.pdf','Rash Guard & MMA Shorts Sample Approval Checklist',3)
d.start('01 / Fillable approval record','Sample Approval<br/>Checklist','For custom rash guards, MMA / grappling shorts and training shorts. Record the actual sample, not a generic pass.')
d.section('1. Identify the sample and controlled attachments')
d.pair('sample_id','Sample ID / revision','review_date','Review date')
d.pair('buyer','Buyer / brand','reviewer','Reviewer / role')
d.pair('style','Style / product','size_color','Sample size / color')
d.field('attachments','Artwork version, material record, measurement chart and label / packing files',40)
d.note('State any substitute material or unfinished detail. Approval cannot cover a component that the sample does not represent. Keep the accepted sample and specification version for production and reorders.')
d.section('2. Measurement record')
d.p('Agree the measurement method, units and tolerance for each point. Measure without unintended stretching. A single sample size does not automatically approve the complete graded range.',9)
# 4 compact editable measurement rows.
cols=[('Point / condition',180),('Target + unit',85),('Tolerance',85),('Actual',CW-350)];x=M;y=d.y
for label,w in cols:
 d.c.setFillColor(INK);d.c.rect(x,y-24,w,24,fill=1,stroke=0);d.c.setFillColor(white);d.c.setFont('TontonSans-Bold',8);d.c.drawString(x+6,y-15,label);x+=w
for row in range(4):
 x=M
 for col,(_,w) in enumerate(cols):
  name=f'measure_{row}_{col}';d.c.acroForm.textfield(name=name,tooltip=f'Measurement row {row+1} {cols[col][0]}',x=x+3,y=y-24-(row+1)*35+4,width=w-6,height=27,fontName='Courier',fontSize=8,borderWidth=.5,borderColor=LINE,fillColor=white,textColor=INK,forceBorder=True);d.fields.append(name);x+=w
d.y=y-24-4*35-15
d.p('Suggested points: chest / hip width, body length / outseam, waist condition, sleeve / inseam, leg opening, split height, gusset width and liner length where relevant.',8,MUTED)
# Measurement exceptions are recorded on page 3.
d.end()
d.start('02 / Inspection outcomes','Inspect the actual garment','Choose Pass, Revise, Not checked or Not applicable. Add details on page 3 for every required correction.')
d.p('Use an agreed care protocol and relevant test reports where required. Visual review is not a laboratory certification, and this form does not define universal numerical tolerances.',9)
checks=[('materials','Material identity','Main fabric plus separate mesh, liner, gusset and elastic records.'),('fit','Fit & movement','Representative wearer / size; pulling, rubbing and recovery.'),('coverage','Coverage','Selected color, lighting and representative wearing stretch.'),('print','Artwork & colors','Version, spelling, scale, placement and panel crossings.'),('seams','Seams & edges','Open seams, skipped stitches, puckering and junctions.'),('waist','Waist / closure','Cord routing, elastic, overlap and contact surfaces.'),('liner','Liner / gusset','Coverage, length, attachment and wearing comfort.'),('care','Care review','Agreed conditions / cycles; dimensions and appearance.'),('labels','Labels & packing','Correct text, size mix, folding, bags and carton brief.')]
for name,label,desc in checks:
 y=d.y;d.p(label,10,INK,True,width=315);d.p(desc,8,MUTED,width=315);end=d.y;d.y=y;d.choice('check_'+name,label+' outcome',['Not checked','Pass','Revise','Not applicable'],width=155,x=W-M-155);d.y=min(end,d.y)-4
# 9 rows about 500pt
d.end()
d.start('03 / Corrections & release','Record the decision','Approval is version-specific. This is a typed approval record, not a digital-signature certificate.')
d.section('3. Corrective actions')
for i in range(1,4):
 d.field('issue_'+str(i),f'Issue {i}: location / observation / correction / owner / retest result',56)
d.section('4. Approval scope & release')
d.choice('decision','Decision',['Hold - unresolved','Approve specified scope','Revise and resubmit'],'Hold - unresolved')
d.field('scope','Scope approved and outstanding exclusions',38)
d.pair('approved_version','Accepted sample / specification revision','approver','Approver name / date')
d.note('Retain the accepted sample, artwork, material records and size chart together. Changes to fabric, fit, artwork, closure or components require documented review. Sample approval and bulk shipment inspection are separate steps.')
d.link('Read the complete sample approval guide','https://www.tontongear.com/blog/custom-fightwear-sample-approval-checklist')
d.end();b=d.save()
# Real images, optimized only for PDF file size.
assets={
 'knit':'https://assets.tontongear.com/assets/fabrics/220gsm-stretch-knit/main-fabric.webp',
 'label':'https://assets.tontongear.com/assets/fabrics/220gsm-stretch-knit/composition-label.webp',
 'mesh':'https://assets.tontongear.com/assets/fabrics/stretch-mesh/mesh-opening-detail.jpg',
 'layers':'https://assets.tontongear.com/assets/fabrics/four-way-stretch-woven/layers-open.jpg',
 'black':'https://assets.tontongear.com/assets/products/snake-scale-mma-shorts/snake-scale-black-front.webp',
 'inside':'https://assets.tontongear.com/assets/products/snake-scale-mma-shorts/snake-scale-black-inner.webp',
 'cyber':'https://assets.tontongear.com/assets/products/cyber-gradient-training-shorts/cyber-gradient-shorts-front.webp',
}
for name,url in assets.items():
 raw=TMP/(name+'.img');
 if not raw.exists():subprocess.run(['curl','-fsSL','--max-time','40',url,'-o',str(raw)],check=True)
 im=Image.open(raw).convert('RGB');im.thumbnail((1000,1000));im.save(TMP/(name+'.jpg'),quality=83,optimize=True)
img=lambda n:TMP/(n+'.jpg')
d=Doc('tonton-fabric-construction-selection-guide-v1.pdf','Fightwear Fabric & Construction Selection Guide',4)
d.start('01 / Rash guard materials','Fabric & Construction<br/>Selection Guide','A practical starting point for custom rash guards, MMA shorts and training shorts. Confirm each selected style through sampling.')
d.section('Rash guard reference: 220 GSM stretch knit')
d.p('Confirmed main-fabric reference: 85% polyester / 15% spandex, nominal 220 GSM. Use composition and weight as material identifiers, then assess fit, feel, coverage and recovery on the finished colorway.')
d.photo_pair(img('knit'),img('label'),'Actual garment main knit. Adjacent panels are separate components.','Supplied label shows 85% polyester / 15% spandex.',165)
d.table(['Decision','What to confirm'],[
 ['Main knit','Identified swatch, nominal GSM, composition and finish.'],['Stretch & recovery','Panel direction, wearing extension, recovery and seam compatibility.'],['Coverage','Selected color under representative lighting and wearing stretch.'],['Decoration','Printed sample on the selected material; color and heat response.']
 ],[135,CW-135])
d.note('GSM is mass per unit area, not a universal quality score. A fiber ratio alone does not prove compression pressure, opacity in every color or a measured drying rate.')
d.link('Explore the 220 GSM fabric reference','https://www.tontongear.com/fabrics/220-gsm-stretch-knit')
d.end()
d.start('02 / Inner layers & ventilation','Specify every layer','Main fabric, mesh, liner, gusset and hem elastic need separate records.')
d.photo_pair(img('layers'),img('mesh'),'Actual high-split sample: separate outer shell and inner layer.','Actual stretch mesh detail: openings and connecting seams.',185)
d.table(['Component','Documented direction','Approval checks'],[
 ['Outer shell','Four-way stretch woven direction on the high-split reference.','Confirm actual fiber ratio, GSM, extension and recovery.'],['Inner knit','250 GSM milk-silk inner fabric on the supplied high-split brief.','Milk silk is a trade description; confirm fiber content, length, fit and coverage.'],['Stretch mesh','Separate open-structure material for selected panels.','Opening size, feel, stretch compatibility, seams and snagging review.'],['Hem grip','Optional silicone anti-slip elastic on selected rash guard styles.','Width, placement, attachment, recovery and skin contact.']
 ],[90,200,CW-290])
d.note('A mesh detail inside a hem is not proof of a full fitted compression liner. Photographs illustrate construction; they do not establish laboratory performance results.')
d.link('Review the outer-shell / inner-layer reference','https://www.tontongear.com/fabrics/four-way-stretch-woven')
d.link('Review stretch mesh','https://www.tontongear.com/fabrics/stretch-mesh')
d.end()
d.start('03 / Shorts architecture','Choose the construction','Match the shell, gusset, split, liner and waist system to the intended training use.')
d.photo_pair(img('black'),img('cyber'),'Snake-scale fight shorts: hook-and-loop fly / internal cord direction.','Cyber-gradient shorts: elastic drawcord waist / curved opening.',170)
d.table(['Reference','Supplied material / structure','Confirm on sample'],[
 ['Snake-scale MMA','Shell brief: 100% micro-polyester. Gusset brief: 88% polyester / 12% spandex.','Fabric records; gusset dimensions; closure overlap, cord routing and covered surfaces.'],['Cyber-gradient','Shell brief: 92% polyester / 8% spandex. Printed mesh visible inside hem.','Inner coverage; do not assume a full fitted liner. Review waist and slit dimensions.'],['High-split 2-in-1','Separate shell / inner layer with high side openings.','Layer lengths, split height, attachment and movement together.'],['Utility training','Ventilation and zipped storage direction.','Pocket / hardware suitability for the intended activity.']
 ],[100,200,CW-300])
d.link('Read the complete MMA shorts construction guide','https://www.tontongear.com/blog/mma-shorts-construction-guide')
d.end()
d.start('04 / Selection & approval','From reference to sample','Use the product images to choose a direction, then approve a defined specification.')
d.section('A practical approval sequence')
d.table(['Step','Buyer action','Record to keep'],[
 ['1. Define use','Product, wearer, sport, fit and destination.','Brief and reference style.'],['2. Select components','Main fabric, liner / mesh, waist, closure and branding.','Identified material / component list.'],['3. Define dimensions','Measurement points, size allocation and numerical tolerances.','Versioned measurement chart.'],['4. Review decoration','Artwork scale, colors, placement and seam crossings.','Approved artwork and decorated sample.'],['5. Check the garment','Fit, movement, coverage, seams, closure and agreed care checks.','Observations, corrections and retest results.'],['6. Approve a version','Confirm scope and resolve outstanding items before release.','Accepted sample, approver and date.']
 ],[85,225,CW-310])
d.section('What to send with your inquiry')
d.p('Share the product reference, estimated quantities by size and color, artwork status, material / construction priorities and requested delivery timing. Use the Project Brief and Sample Approval Checklist alongside this guide.')
d.note('No universal tear-proof, non-slip, permanent-color, medical-compression or competition-approval claim is made. Measured performance needs an appropriate method and report for the selected garment. Check current organizer requirements for competition use.')
d.link('Start your custom project','https://www.tontongear.com/project-builder?source=download-selection-guide')
d.link('Browse product references','https://www.tontongear.com/products')
d.link('Continue with the online fabric guide','https://www.tontongear.com/blog/how-to-choose-fabric-for-custom-rash-guards')
d.p('Source basis: TONTON supplied garment photographs, product composition briefs and published fabric / product pages. Images are actual supplied garment references; file optimization does not establish a test result. Document version 1.0, 29 October 2026.',8,MUTED)
d.end();c=d.save()
manifest=[a,b,c]
for item in manifest:shutil.copy2(OUT/item['file'],ROOT/'public/downloads'/item['file'])
(ROOT/'tmp/pdfs/manifest.json').write_text(json.dumps(manifest,indent=2))
print(json.dumps(manifest))
