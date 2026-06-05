(function() {
    const results = [];
    const items = document.querySelectorAll('div.card-body, div[data-test="supplier-card"]');
    
    items.forEach(item => {
        const nameEl = item.querySelector('h2 a');
        const name = nameEl ? nameEl.innerText.trim() : '';
        
        const typeEl = item.querySelector('.supplier-card__type, .supplier-type');
        const typeText = typeEl ? typeEl.innerText : item.innerText;
        
        const isDistributor = /Distributor|Wholesaler/.test(typeText);
        
        const websiteBtn = item.querySelector('a[data-test="visit-website-link"], a.visit-website-link, a.btn-primary');
        const website = websiteBtn ? websiteBtn.href : '';
        
        const description = item.querySelector('.supplier-card__description, p')?.innerText || '';
        const sports = [];
        if (/baseball/i.test(description)) sports.push('Baseball');
        if (/hockey/i.test(description)) sports.push('Hockey');
        if (/football/i.test(description)) sports.push('Football');
        
        if (isDistributor && (sports.length > 0 || /athletic|sportswear/i.test(description))) {
            results.push({ name, website, type: typeText.includes('Distributor') ? 'Distributor' : 'Wholesaler', sports: sports.join(', '), description });
        }
    });
    return results;
})()