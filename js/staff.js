// ============================================
// STAFF - PERSONAL
// ============================================

function renderStaff() {
    const container = document.getElementById('staff-container');
    let totalMembers = 0;

    Object.entries(staffData).forEach(([groupName, groupData]) => {
        // Verificar si el grupo tiene subdivisiones (como Cuerpo Activo)
        const hasSubdivisions = groupData && typeof groupData === 'object' && !Array.isArray(groupData);

        if (hasSubdivisions) {
            // Renderizar grupo con subdivisiones (Cuerpo Activo)
            const staffSection = document.createElement('div');
            staffSection.className = 'staff-container-section';

            const sectionTitle = document.createElement('h2');
            sectionTitle.className = 'staff-section-title';
            sectionTitle.textContent = groupName;
            staffSection.appendChild(sectionTitle);

            Object.entries(groupData).forEach(([subgroupName, members]) => {
                totalMembers += members.length;

                const staffGroup = document.createElement('div');
                staffGroup.className = 'staff-group';

                // Título del subgrupo
                const groupTitle = document.createElement('div');
                groupTitle.className = 'staff-group-title';
                const h3 = document.createElement('h3');
                h3.textContent = subgroupName;
                const count = document.createElement('p');
                count.className = 'staff-group-count';
                count.textContent = `${members.length} ${members.length === 1 ? 'miembro' : 'miembros'}`;
                groupTitle.appendChild(h3);
                groupTitle.appendChild(count);

                // Grid de miembros
                const staffGrid = document.createElement('div');
                staffGrid.className = 'staff-grid';

                members.forEach(member => {
                    const staffCard = createStaffCard(member, groupName);
                    staffGrid.appendChild(staffCard);
                });

                staffGroup.appendChild(groupTitle);
                staffGroup.appendChild(staffGrid);
                staffSection.appendChild(staffGroup);
            });

            container.appendChild(staffSection);
        } else if (Array.isArray(groupData)) {
            // Renderizar grupo sin subdivisiones (Reserva Activa, Comisión Directiva)
            totalMembers += groupData.length;

            const staffGroup = document.createElement('div');
            staffGroup.className = 'staff-group';

            // Título del grupo
            const groupTitle = document.createElement('div');
            groupTitle.className = 'staff-group-title';
            const h3 = document.createElement('h3');
            h3.textContent = groupName;
            const count = document.createElement('p');
            count.className = 'staff-group-count';
            count.textContent = `${groupData.length} ${groupData.length === 1 ? 'miembro' : 'miembros'}`;
            groupTitle.appendChild(h3);
            groupTitle.appendChild(count);

            // Grid de miembros
            const staffGrid = document.createElement('div');
            staffGrid.className = 'staff-grid';

            groupData.forEach(member => {
                const staffCard = createStaffCard(member, groupName);
                staffGrid.appendChild(staffCard);
            });

            staffGroup.appendChild(groupTitle);
            staffGroup.appendChild(staffGrid);
            container.appendChild(staffGroup);
        }
    });

    // Actualizar total
    document.getElementById('total-staff').textContent = totalMembers;
}

function createStaffCard(member, groupName) {
    const staffCard = document.createElement('div');
    staffCard.className = 'staff-card';

    // Avatar
    const avatar = document.createElement('img');
    avatar.className = 'staff-avatar-img';
    avatar.alt = member.NOMBRE;
    avatar.src = `images/staff/${member.LEG}.jpeg`;
    avatar.onerror = function() {
        this.src = `images/staff/${member.LEG}.jpg`;
        this.onerror = function() {
            const fallback = document.createElement('div');
            fallback.className = 'staff-avatar';
            const initials = member.NOMBRE.split(' ').map(n => n[0]).join('').substring(0, 2);
            fallback.textContent = initials;
            this.replaceWith(fallback);
        };
    };

    // Nombre
    const name = document.createElement('div');
    name.className = 'staff-name';
    name.textContent = member.NOMBRE;

    // Legajo (solo se muestra si NO es Comisión Directiva)
    const legajo = document.createElement('div');
    legajo.className = 'staff-legajo';
    legajo.textContent = `Leg. ${member.LEG}`;
    if (groupName === 'Comisión Directiva') {
        legajo.style.display = 'none'; // Ocultar pero mantener en el DOM
    }

    // Jerarquía
    const jerarquia = document.createElement('div');
    jerarquia.className = 'staff-jerarquia';
    jerarquia.textContent = member.JERARQUIA;

    staffCard.appendChild(avatar);
    staffCard.appendChild(name);
    staffCard.appendChild(legajo);
    staffCard.appendChild(jerarquia);

    return staffCard;
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', renderStaff);

