// ============================================
// VALUES - VALORES
// ============================================

function renderValues() {
    const container = document.getElementById('values-container');
    
    valuesData.forEach(value => {
        const valueCard = document.createElement('div');
        valueCard.className = 'value-card';
        
        const icon = document.createElement('div');
        icon.className = 'value-icon';
        icon.textContent = value.icon;
        
        const title = document.createElement('h3');
        title.className = 'value-title';
        title.textContent = value.title;
        
        const description = document.createElement('p');
        description.className = 'value-description';
        description.textContent = value.description;
        
        valueCard.appendChild(icon);
        valueCard.appendChild(title);
        valueCard.appendChild(description);
        
        container.appendChild(valueCard);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderValues);
