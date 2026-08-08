// Simple dependency-free carousel gallery.
// Each gallery is defined by a data array and rendered into its container.

const galleries = {
  dissertation: [
    { src: "images/diss_02_sentiment_by_id.png", title: "Narrative Sentiment by Participant", desc: "AFINN-lexicon sentiment scores across all participants, cleaned transcripts." },
    { src: "images/diss_01_sentiment_extremes.png", title: "Extreme Sentiment Profiles", desc: "Most negative vs. most positive participants by mean sentiment score." },
    { src: "images/diss_03_temp_triage.svg", title: "Temporal Triage Model", desc: "Working diagram from the risk-triage design process." },
    { src: "images/diss_05_pca_pc1_loadings.png", title: "PCA — PC1 Loadings", desc: "Acoustic features contributing most to the first principal component." },
    { src: "images/diss_07_pca_variable_contribution.png", title: "PCA — Clinical Marker Contribution", desc: "Variable correlation plot across the two leading principal dimensions." },
    { src: "images/diss_06_pca_feature_effectiveness.png", title: "Feature Effectiveness Matrix", desc: "Mean/maximum |r| across eGeMAPS functional categories (N = 107)." },
    { src: "images/diss_09_personality_acoustic_regression.png", title: "Adjusted Personality → Coping Effect", desc: "Regression coefficients controlled for four acoustic features." },
    { src: "images/diss_08_personality_coping_coeff.png", title: "Personality–Coping Coefficients", desc: "Effect sizes with confidence intervals, adjusted for acoustic biomarkers." },
    { src: "images/diss_13_coping_separation.png", title: "Coping Discovery Model", desc: "Adaptive vs. maladaptive coping separation (Carver & Connor-Smith, 2010)." },
    { src: "images/diss_12_linear_decision_gradients.png", title: "Linear Decision Gradients", desc: "Personality vs. coping, faceted by trait, coloured by F0 variability." },
    { src: "images/diss_11_smoothing_trend.png", title: "Smoothing the Acoustic–Coping Bridge", desc: "Linear regression vs. LOESS smoothing comparison." },
    { src: "images/diss_10_knn_crossvalidation.png", title: "k-NN Cross-Validation", desc: "10-fold CV identifying the optimal k for the multi-modal classifier." },
    { src: "images/diss_04_model_performance.png", title: "Model Performance Validation", desc: "Baseline vs. integrated Random Forest recommender, RMSE 0.35 → 0.31." }
  ],
  icmr: [
    { src: "images/icmr_02_abdm_dashboard.png", title: "ABDM Master Dashboard", desc: "Readiness metrics across MIS, compliance, and milestones by programme." },
    { src: "images/icmr_03_partner_ecosystem_grid.png", title: "Partner Ecosystem Integration Grid", desc: "Mapping products to integration levels (M1–M4) by solution category." },
    { src: "images/icmr_01_integration_by_solution.png", title: "Integration Modules by Solution Type", desc: "Applications using each integration module, grouped by solution." }
  ]
};

function buildCarousel(containerId, items) {
  const root = document.getElementById(containerId);
  if (!root) return;
  let index = 0;

  root.innerHTML = `
    <div class="carousel">
      <div class="carousel-stage">
        <div class="carousel-image"><img id="${containerId}-img" alt=""></div>
        <div class="carousel-caption">
          <strong id="${containerId}-title"></strong>
          <span id="${containerId}-desc"></span>
        </div>
      </div>
      <div class="carousel-nav">
        <button class="carousel-btn prev" aria-label="Previous">&#8249;</button>
        <button class="carousel-btn next" aria-label="Next">&#8250;</button>
      </div>
      <div class="carousel-meta">
        <div class="carousel-counter" id="${containerId}-counter"></div>
        <div class="carousel-dots" id="${containerId}-dots"></div>
      </div>
    </div>
  `;

  const imgEl = document.getElementById(`${containerId}-img`);
  const titleEl = document.getElementById(`${containerId}-title`);
  const descEl = document.getElementById(`${containerId}-desc`);
  const counterEl = document.getElementById(`${containerId}-counter`);
  const dotsEl = document.getElementById(`${containerId}-dots`);

  items.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.setAttribute("aria-label", `Go to figure ${i + 1}`);
    dot.addEventListener("click", () => show(i));
    dotsEl.appendChild(dot);
  });

  function show(i) {
    index = (i + items.length) % items.length;
    const item = items[index];
    imgEl.src = item.src;
    imgEl.alt = item.title;
    titleEl.textContent = item.title;
    descEl.textContent = item.desc;
    counterEl.textContent = `${index + 1} / ${items.length}`;
    [...dotsEl.children].forEach((d, di) => d.classList.toggle("active", di === index));
  }

  root.querySelector(".carousel-btn.prev").addEventListener("click", () => show(index - 1));
  root.querySelector(".carousel-btn.next").addEventListener("click", () => show(index + 1));

  root.setAttribute("tabindex", "0");
  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  show(0);
}

buildCarousel("dissertation-gallery", galleries.dissertation);
buildCarousel("icmr-gallery", galleries.icmr);
