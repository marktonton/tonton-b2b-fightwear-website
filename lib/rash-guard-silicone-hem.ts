const ROOT = '/assets/products/rash-guard-products/silicone-hem';

export const SILICONE_HEM_VIDEO = {
  id: 'silicone-anti-slip-band',
  title: 'Rash Guard Silicone Anti-Slip Elastic Band | Hem Construction Overview',
  description: 'A 15-second promotional visualization of a Rash Guard silicone anti-slip elastic band, showing the sewing direction, silicone grip surface and lower-hem position. Original sample photographs on the page document the actual band, seam junction and mesh connection. Final band dimensions, grip feel and fit are confirmed on the approved sample.',
  src: `${ROOT}/rash-guard-silicone-anti-slip-band-v1.mp4`,
  poster: `${ROOT}/rash-guard-silicone-anti-slip-band-v1.webp`,
  uploadDate: '2026-10-15T11:02:18+08:00',
  duration: 'PT15.084S',
};

export const SILICONE_HEM_PHOTOS = [
  { src: `${ROOT}/rash-guard-silicone-hem-overview.webp`, width: 1152, height: 2048, title: 'Inside the lower hem', alt: 'Original Rash Guard sample photograph showing a silicone anti-slip elastic band inside the folded lower hem', copy: 'The turned-back hem shows the black silicone grip band and the way it sits against the garment interior.' },
  { src: `${ROOT}/rash-guard-grip-band-mesh-connection.webp`, width: 2048, height: 1152, title: 'Band and mesh connection', alt: 'Silicone anti-slip elastic band joined to a white mesh panel with black edge stitching on a Rash Guard sample', copy: 'Compare the band edge, mesh insert and stretch-fabric junction. Mesh layout is specific to this construction reference.' },
  { src: `${ROOT}/rash-guard-elastic-band-seam-junction.webp`, width: 1152, height: 2048, title: 'Hem seam junction', alt: 'Close-up of Rash Guard silicone grip band finishing at the garment seam junction', copy: 'The close-up shows the overlapping edge and stitching where the band and panel seams meet.' },
  { src: `${ROOT}/rash-guard-silicone-grip-stitching.webp`, width: 2048, height: 1152, title: 'Grip surface and stitching', alt: 'Detailed silicone grip surface and black joining stitches at the lower edge of a Rash Guard', copy: 'Review the visible grip lines, stitch direction and edge finish alongside the fit and comfort of the complete sample.' },
  { src: `${ROOT}/rash-guard-silicone-grip-close-up.webp`, width: 738, height: 774, title: 'Silicone surface close-up', alt: 'Handheld close-up showing the glossy silicone contact lines on a Rash Guard anti-slip elastic band', copy: 'This supplied close-up gives an additional view of the silicone contact surface. Open the image to inspect it at its original resolution.' },
] as const;

export const SILICONE_HEM_FAQS = [
  { question: 'What is a silicone anti-slip elastic band on a Rash Guard?', answer: 'It is an elastic band with silicone grip at the inside lower hem. It helps reduce ride-up during BJJ, MMA and grappling movement, but does not guarantee that the garment never moves. Review hem circumference, stretch, grip feel and comfort on the worn sample.' },
  { question: 'What should brands specify for a custom Rash Guard with a silicone gripper hem?', answer: 'Share the intended sport, target fit, size range, band width and position, grip preference and seam-finish requirements. TONTON reviews the silicone anti-slip elastic band with the garment fabric and construction before sample approval. Final dimensions and construction are confirmed for each OEM or ODM project.' },
] as const;
