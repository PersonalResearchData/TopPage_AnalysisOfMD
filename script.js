document.addEventListener('DOMContentLoaded', function () {
    console.log('JavaScriptが読み込まれました');

    // ビデオの右クリックを無効化してダウンロードを抑制
    const videoPlayer = document.getElementById('main-video');
    if (videoPlayer) {
        videoPlayer.addEventListener('contextmenu', function (e) {
            e.preventDefault();
        });
    }

    // カードのホバー効果とクリック機能
    const rdfCard = document.getElementById('rdf-card');
    const adfCard = document.getElementById('adf-card');
    const logCard = document.getElementById('log-card');
    const traj2xyzCard = document.getElementById('traj2xyz-card');


    // RDFカードの処理
    if (rdfCard) {
        // クリック時の処理
        rdfCard.addEventListener('click', function () {
            window.open('https://personalresearchdata.github.io/RDF_Plotter/', '_blank');
        });

        // ホバー時のツールチップ表示
        rdfCard.addEventListener('mouseenter', function () {
            showTooltip(rdfCard, 'クリックしてRDF Plotterを開く');
        });

        rdfCard.addEventListener('mouseleave', function () {
            hideTooltip();
        });
    }

    // ADFカードの処理
    if (adfCard) {
        // クリック時の処理
        adfCard.addEventListener('click', function () {
            window.open('https://personalresearchdata.github.io/ADF_Plotter/', '_blank');
        });

        // ホバー時のツールチップ表示
        adfCard.addEventListener('mouseenter', function () {
            showTooltip(adfCard, 'クリックしてADF Plotterを開く');
        });

        adfCard.addEventListener('mouseleave', function () {
            hideTooltip();
        });
    }


    // LOGカードの処理
    if (logCard) {
        // クリック時の処理
        logCard.addEventListener('click', function () {
            window.open('https://andeplane.github.io/LAMMPSLogPlotter/', '_blank');
        });

        // ホバー時のツールチップ表示
        logCard.addEventListener('mouseenter', function () {
            showTooltip(logCard, 'クリックしてLAMMPS Log Plotterを開く');
        });

        logCard.addEventListener('mouseleave', function () {
            hideTooltip();
        });
    }


    // Traj2XYZカードの処理
    if (traj2xyzCard) {
        // クリック時の処理
        traj2xyzCard.addEventListener('click', function () {
            window.open('https://personalresearchdata.github.io/Trajectory2XYZ_zip_lammps/', '_blank');
        });

        // ホバー時のツールチップ表示
        traj2xyzCard.addEventListener('mouseenter', function () {
            showTooltip(traj2xyzCard, 'クリックしてLAMMPS Trajectory Parserを開く');
        });

        traj2xyzCard.addEventListener('mouseleave', function () {
            hideTooltip();
        });
    }


    // ツールチップ表示関数
    function showTooltip(element, text) {
        // 既存のツールチップを削除
        hideTooltip();
        
        const tooltip = document.createElement('div');
        tooltip.className = 'custom-tooltip';
        tooltip.textContent = text;
        tooltip.style.cssText = `
            position: absolute;
            background-color: #333;
            color: white;
            padding: 8px 12px;
            border-radius: 4px;
            font-size: 0.9rem;
            white-space: nowrap;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
            pointer-events: none;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        `;
        
        document.body.appendChild(tooltip);
        
        // 位置を計算
        const rect = element.getBoundingClientRect();
        tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = (rect.top - tooltip.offsetHeight - 10) + 'px';
        
        // フェードイン効果
        setTimeout(() => {
            tooltip.style.opacity = '1';
        }, 10);
    }

    // ツールチップ非表示関数
    function hideTooltip() {
        const tooltip = document.querySelector('.custom-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
});
