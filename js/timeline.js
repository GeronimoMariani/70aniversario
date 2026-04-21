// ============================================
// TIMELINE - LÍNEA DE TIEMPO
// ============================================

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    
    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const content = document.createElement('div');
        content.className = 'timeline-content';
        
        const year = document.createElement('div');
        year.className = 'timeline-year';
        year.textContent = item.year;
        
        const title = document.createElement('div');
        title.className = 'timeline-title';
        title.textContent = item.title;
        
        const description = document.createElement('div');
        description.className = 'timeline-description';
        description.textContent = item.description;
        
        content.appendChild(year);
        content.appendChild(title);
        content.appendChild(description);
        
        const dot = document.createElement('div');
        dot.className = 'timeline-dot';
        dot.textContent = index + 1;
        
        timelineItem.appendChild(content);
        timelineItem.appendChild(dot);
        
        container.appendChild(timelineItem);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderTimeline);
