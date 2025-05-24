let filteredUniversities = [...universities];

function updateStats() {
    const totalUniversities = filteredUniversities.length;
    const publicUniversities = filteredUniversities.filter(u => u.type === 'Công lập').length;
    const privateUniversities = filteredUniversities.filter(u => u.type === 'Tư thục').length;
    
    const allMethods = new Set();
    filteredUniversities.forEach(u => {
        u.admissionMethods.forEach(method => allMethods.add(method));
    });

    document.getElementById('totalUniversities').textContent = totalUniversities;
    document.getElementById('totalMethods').textContent = allMethods.size;
    document.getElementById('publicUniversities').textContent = publicUniversities;
    document.getElementById('privateUniversities').textContent = privateUniversities;
}

function renderUniversities() {
    const grid = document.getElementById('universityGrid');
    const noResults = document.getElementById('noResults');

    if (filteredUniversities.length === 0) {
        grid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    grid.style.display = 'grid';
    noResults.style.display = 'none';

    grid.innerHTML = filteredUniversities.map(university => `
        <div class="university-card">
            <div class="university-name">${university.name}</div>
            <div class="university-info">
                <div class="info-item">
                    <div class="info-icon">📍</div>
                    <span>${university.region}</span>
                </div>
                <div class="info-item">
                    <div class="info-icon">🏛️</div>
                    <span>${university.type}</span>
                </div>
                <div class="info-item">
                    <div class="info-icon">📅</div>
                    <span>Thành lập: ${university.established}</span>
                </div>
                <div class="info-item">
                    <div class="info-icon">🌐</div>
                    <span>${university.website}</span>
                </div>
            </div>
            ${university.detailedInfo ? `
                <div class="admission-period">
                    <h4>⏰ Thời gian xét tuyển:</h4>
                    <p>${university.detailedInfo.admissionPeriod}</p>
                </div>
                ${university.detailedInfo.totalQuota ? `
                    <div class="admission-quota">
                        <h4>🎯 Chỉ tiêu tuyển sinh:</h4>
                        <p>${university.detailedInfo.totalQuota}</p>
                    </div>
                ` : ''}
                ${university.detailedInfo.scoringNote ? `
                    <div class="scoring-note">
                        <h4>📊 Lưu ý:</h4>
                        <p>${university.detailedInfo.scoringNote}</p>
                    </div>
                ` : ''}
            ` : ''}
            <div class="admission-methods">
                <h4>Phương thức xét tuyển:</h4>
                <div class="method-tags">
                    ${university.admissionMethods.map(method => 
                        `<span class="method-tag">${method}</span>`
                    ).join('')}
                </div>
            </div>
            ${university.detailedInfo ? `
                <div class="detailed-methods">
                    <h4 style="margin-top: 20px; color: #2c3e50;">Chi tiết các phương thức:</h4>
                    ${Object.entries(university.detailedInfo.methods).map(([method, details]) => `
                        <div class="method-detail" style="margin: 10px 0; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 3px solid #3498db;">
                            <h5 style="color: #2c3e50; margin-bottom: 8px;">${method} ${details.methodCode ? `(Mã: ${details.methodCode})` : ''}</h5>
                            <p style="margin: 5px 0; font-size: 0.9em;"><strong>Điều kiện:</strong> ${details.condition}</p>
                            ${details.quota ? `<p style="margin: 5px 0; font-size: 0.9em;"><strong>Chỉ tiêu:</strong> ${details.quota}</p>` : ''}
                            ${details.scoring ? `<p style="margin: 5px 0; font-size: 0.9em;"><strong>Cách tính điểm:</strong> ${details.scoring}</p>` : ''}
                        </div>
                    `).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function filterUniversities() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const regionFilter = document.getElementById('regionFilter').value;
    const typeFilter = document.getElementById('typeFilter').value;

    filteredUniversities = universities.filter(university => {
        const matchesSearch = university.name.toLowerCase().includes(searchTerm) ||
                            university.admissionMethods.some(method => 
                                method.toLowerCase().includes(searchTerm)
                            );
        const matchesRegion = !regionFilter || university.region === regionFilter;
        const matchesType = !typeFilter || university.type === typeFilter;

        return matchesSearch && matchesRegion && matchesType;
    });

    renderUniversities();
    updateStats();
}

// Event listeners
document.getElementById('searchBox').addEventListener('input', filterUniversities);
document.getElementById('regionFilter').addEventListener('change', filterUniversities);
document.getElementById('typeFilter').addEventListener('change', filterUniversities);

// Initial render
filterUniversities(); 