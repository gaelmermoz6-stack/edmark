const whatsapp = "https://wa.me/22946064812";

const concerns = [
  {
    number: "01",
    title: "Trop de solutions contradictoires",
    text: "Les conseils extrêmes sont difficiles à suivre. Un échange avec un professionnel aide à faire le tri selon votre situation.",
  },
  {
    number: "02",
    title: "Des habitudes difficiles à tenir",
    text: "Les changements durables se construisent progressivement, avec des choix réalistes et adaptés au quotidien.",
  },
  {
    number: "03",
    title: "Besoin d'un cadre clair",
    text: "Le programme P4 organise sa présentation autour de quatre étapes et de plusieurs produits complémentaires.",
  },
];

const steps = [
  {
    number: "01",
    icon: "↗",
    title: "Découvrir",
    product: "Shake Off",
    text: "Une boisson en poudre présentée dans le programme. Consultez l'étiquette pour les ingrédients et le mode d'emploi.",
    tone: "mint",
  },
  {
    number: "02",
    icon: "◒",
    title: "Composer",
    product: "MRT Complex",
    text: "Un mélange nutritionnel à intégrer uniquement selon les instructions figurant sur son emballage.",
    tone: "peach",
  },
  {
    number: "03",
    icon: "◉",
    title: "Équilibrer",
    product: "Splina",
    text: "Une boisson à base de chlorophylle liquide. Demandez conseil avant toute nouvelle supplémentation.",
    tone: "lime",
  },
  {
    number: "04",
    icon: "✳",
    title: "Accompagner",
    product: "Cafés Edmark",
    text: "Les cafés Ginseng et Red Yeast font partie de la gamme. Vérifiez leur composition et leurs précautions d'emploi.",
    tone: "lavender",
  },
];

const products = [
  ["Shake Off", "Boisson en poudre", "Une option à découvrir dans la gamme P4."],
  ["MRT Complex", "Mélange nutritionnel", "Consultez les informations nutritionnelles sur l'emballage."],
  ["Splina", "Chlorophylle liquide", "Suivez les indications du fabricant."],
  ["Ginseng Coffee", "Café au ginseng", "Vérifiez la teneur en caféine avant consommation."],
  ["Red Yeast Coffee", "Café au riz rouge fermenté", "Demandez conseil à un professionnel de santé, notamment en cas de traitement."],
];

const questions = [
  [
    "Le programme garantit-il une perte de poids ?",
    "Non. Les résultats varient selon les personnes et aucun résultat ne peut être garanti. Une alimentation équilibrée, l'activité physique et un suivi adapté restent importants.",
  ],
  [
    "Les produits conviennent-ils à tout le monde ?",
    "Pas nécessairement. Lisez les étiquettes et demandez conseil à un médecin ou pharmacien, en particulier en cas de grossesse, d'allaitement, de maladie ou de prise de médicaments.",
  ],
  [
    "Où puis-je obtenir les prix et disponibilités ?",
    "Écrivez à un conseiller sur WhatsApp pour demander les tarifs, la disponibilité et les modalités de livraison dans votre région.",
  ],
  [
    "Comment commencer ?",
    "Commencez par demander la composition détaillée des produits et les consignes d'utilisation. Vous pourrez ensuite décider si cette gamme correspond à vos besoins.",
  ],
];

function Brand() {
  return (
    <a className="brand" href="#accueil" aria-label="Edmark, accueil">
      <span className="brand-word">EDMARK<span className="brand-dot">®</span></span>
      <span className="brand-stripe" aria-hidden="true"><i /><i /><i /></span>
    </a>
  );
}

function WhatsAppLink({ children, className = "button", message = "Bonjour, je souhaite en savoir plus sur le programme P4 Edmark." }) {
  return (
    <a className={className} href={`${whatsapp}?text=${encodeURIComponent(message)}`} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <Brand />
        <details className="mobile-menu">
          <summary aria-label="Ouvrir le menu"><span /><span /></summary>
          <nav className="mobile-links" aria-label="Navigation mobile">
            <a href="#approche">L'approche P4</a>
            <a href="#produits">Les produits</a>
            <a href="#questions">Questions fréquentes</a>
            <WhatsAppLink className="button button-small">Nous contacter</WhatsAppLink>
          </nav>
        </details>
        <nav className="desktop-nav" aria-label="Navigation principale">
          <a href="#approche">L'approche P4</a>
          <a href="#produits">Les produits</a>
          <a href="#questions">FAQ</a>
        </nav>
        <WhatsAppLink className="header-cta">Parler à un conseiller</WhatsAppLink>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-photo" role="img" aria-label="Moment de bien-être en plein air" />
          <div className="hero-wash" />
          <div className="hero-content page-width">
            <p className="eyebrow"><span /> Un programme en quatre étapes</p>
            <h1>Votre équilibre,<br />à votre <em>rythme.</em></h1>
            <p className="hero-description">
              Découvrez l'approche P4 d'Edmark et échangez avec un conseiller pour mieux comprendre la gamme et ses usages.
            </p>
            <div className="hero-actions">
              <WhatsAppLink>Découvrir le programme</WhatsAppLink>
              <a className="text-link" href="#approche">Explorer l'approche <span aria-hidden="true">↓</span></a>
            </div>
            <p className="hero-note">Compléments alimentaires · Informations à vérifier sur chaque étiquette</p>
          </div>
          <div className="hero-index" aria-hidden="true"><span>01</span><i /> BIEN-ÊTRE AU QUOTIDIEN</div>
          <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Contacter Edmark sur WhatsApp">◉</a>
        </section>

        <section className="trust-strip" aria-label="Repères sur la marque">
          <div><span className="trust-symbol">◎</span><span>Présence internationale</span></div>
          <div><span className="trust-symbol">✳</span><span>Une gamme de produits bien-être</span></div>
          <div><span className="trust-symbol">↗</span><span>Conseil sur WhatsApp</span></div>
          <div><span className="trust-symbol">◇</span><span>Informations accessibles</span></div>
        </section>

        <section className="section concerns page-width">
          <div className="section-heading">
            <p className="eyebrow">Une approche plus informée</p>
            <h2>Prendre soin de soi<br />sans <em>raccourcis.</em></h2>
          </div>
          <div className="concern-content">
            <p className="section-intro">Les parcours de bien-être sont personnels. L'essentiel est de comprendre ce que l'on choisit et de trouver un cadre adapté à sa vie.</p>
            <div className="concern-list">
              {concerns.map((item) => (
                <article className="concern-item" key={item.number}>
                  <span className="item-number">{item.number}</span>
                  <div><h3>{item.title}</h3><p>{item.text}</p></div>
                  <span className="item-arrow" aria-hidden="true">↗</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="approach" id="approche">
          <div className="page-width">
            <div className="approach-heading">
              <div><p className="eyebrow">La méthode P4</p><h2>Quatre temps.<br /><em>Un même cap.</em></h2></div>
              <p>Le programme présente une sélection de produits en quatre étapes. Découvrez leur rôle annoncé et vérifiez leur composition avant utilisation.</p>
            </div>
            <div className="step-grid">
              {steps.map((step) => (
                <article className={`step-card ${step.tone}`} key={step.number}>
                  <div className="step-meta"><span>{step.number} / 04</span><span className="step-icon" aria-hidden="true">{step.icon}</span></div>
                  <p className="step-kicker">{step.title}</p>
                  <h3>{step.product}</h3>
                  <p className="step-description">{step.text}</p>
                  <span className="step-rule" />
                </article>
              ))}
            </div>
            <p className="approach-footnote">La présentation du programme ne remplace pas un avis médical. Les compléments ne se substituent pas à une alimentation variée.</p>
          </div>
        </section>

        <section className="products page-width" id="produits">
          <div className="products-heading">
            <div><p className="eyebrow">Dans la gamme</p><h2>Rencontrez les<br /><em>produits P4.</em></h2></div>
            <p>Demandez les étiquettes et les conseils d'utilisation avant de choisir. Les formulations et disponibilités peuvent varier selon les marchés.</p>
          </div>
          <div className="product-grid">
            {products.map(([name, type, description], index) => (
              <article className={`product-item product-${index + 1}`} key={name}>
                <div className="product-visual" aria-hidden="true"><span className="product-index">P4 / 0{index + 1}</span><span className="product-mark">{["S", "M", "Sp", "G", "R"][index]}</span><span className="product-label">EDMARK<br /><b>{name}</b></span><span className="product-line" /></div>
                <p className="product-type">{type}</p>
                <h3>{name}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
          <div className="products-cta"><span>Une question sur les ingrédients ou les tarifs ?</span><WhatsAppLink className="text-link">Écrire à un conseiller</WhatsAppLink></div>
        </section>

        <section className="conversation">
          <div className="conversation-image" role="img" aria-label="Promenade et activité en extérieur" />
          <div className="conversation-copy">
            <p className="eyebrow">Échange personnalisé</p>
            <h2>Commencez par<br />poser vos <em>questions.</em></h2>
            <p>Demandez la composition, les précautions d'emploi, les prix et la disponibilité du programme P4 dans votre région.</p>
            <WhatsAppLink>Contacter un conseiller</WhatsAppLink>
            <small>Sans engagement. Prenez le temps de vérifier les informations.</small>
          </div>
        </section>

        <section className="faq page-width" id="questions">
          <div className="faq-heading"><p className="eyebrow">Avant de choisir</p><h2>Questions<br /><em>fréquentes.</em></h2></div>
          <div className="faq-list">
            {questions.map(([question, answer], index) => (
              <details className="faq-item" key={question} open={index === 0}>
                <summary><span>{question}</span><i aria-hidden="true" /></summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-main page-width">
          <div><Brand /><p>Des informations claires pour découvrir la gamme Edmark et choisir en connaissance de cause.</p></div>
          <div className="footer-links"><a href="#approche">L'approche P4</a><a href="#produits">Les produits</a><a href="#questions">Questions fréquentes</a></div>
          <WhatsAppLink className="footer-contact">WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink>
        </div>
        <div className="footer-bottom page-width"><span>© {new Date().getFullYear()} Edmark · Informations générales</span><span>Les produits ne sont pas destinés à diagnostiquer, traiter, guérir ou prévenir une maladie.</span></div>
      </footer>
    </>
  );
}