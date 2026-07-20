// ── TRADUCCIONES ──
const translations = {
  es: {
    nav_mision: "Misión",
    nav_proyectos: "Proyectos",
    nav_equipo: "Equipo",
    nav_contacto: "Contacto",
    equipo_label: "Quiénes somos",
    equipo_title: "Equipo",
    equipo_dir_label: "Dirección",
    equipo_socios_label: "Fundadores",
    role_director: "Director",
    role_socio: "Fundador",
    hero_founded: "Establecida en 2014",
    hero_sub: "Promoviendo educación, innovación y adopción de Bitcoin en Latinoamérica, España y Portugal.",
    hero_cta: "Conoce nuestros proyectos",
    mision_label: "Quiénes somos",
    mision_title: "Nuestra Misión",
    mision_text: "La Fundación Bitcoin Iberoamérica es una organización sin fines de lucro, pionera en la región, dedicada a promover el desarrollo y la adopción de Bitcoin como pilares de libertad financiera, privacidad y soberanía tecnológica. Impulsamos este cambio a través de iniciativas locales de alto impacto y una sólida cooperación global en todo el espacio Iberoamericano.",
    stat_founded: "Año de fundación",
    stat_paises: "Países con presencia activa",
    stat_labif: "Fondo LABIF 2026",
    pillar_edu_title: "Educación",
    pillar_edu_desc: "Formamos comunidades con conocimiento financiero y tecnológico basado en Bitcoin.",
    pillar_inn_title: "Innovación",
    pillar_inn_desc: "Financiamos desarrolladores y proyectos que construyen sobre la red Bitcoin.",
    pillar_ado_title: "Adopción",
    pillar_ado_desc: "Impulsamos el ecosistema regional con eventos, grants e iniciativas de base.",
    proyectos_label: "Lo que apoyamos",
    proyectos_title: "Proyectos e Iniciativas que apoyamos",
    proyectos_intro: "Algunos de los proyectos e iniciativas más destacados que reciben el apoyo de la Fundación Bitcoin Iberoamérica.",
    p1_title: "Librería de Satoshi",
    p1_desc: "Financiamiento y difusión de literatura Bitcoin en español y portugués para democratizar el conocimiento.",
    p2_title: "Escuelita Bitcoin",
    p2_desc: "Programa de educación financiera con Bitcoin orientado a comunidades con acceso limitado al sistema bancario.",
    p3_title: "Bitcoineta de Argentina al Mundo",
    p3_desc: "Vehículos itinerantes de educación Bitcoin activos en Argentina, Chile, El Salvador, Kenya, Europa, Paraguay y muchos otros.",
    p4_title: "ONG Bitcoin Argentina",
    p4_desc: "Organización sin fines de lucro con foco en Argentina que promueve Bitcoin como tecnología abierta para la libertad financiera. Organiza talleres en escuelas y universidades, impulsa la descentralización y defiende la autocustodia.",
    p5_title: "Eventos Regionales",
    p5_desc: "Patrocinamos BitcoinTalks y Blockchain Summit (Uruguay), Bitcoast (Chile) y eventos B2B en México.",
    p6_title: "Premio B·Arte",
    p6_desc: "Concurso de arte impulsado por ONG Bitcoin Argentina para diseñar el monumento a Satoshi Nakamoto en Buenos Aires. Más de 300 participantes y premios en Bitcoin.",
    tag_arte: "Arte & Cultura",
    p7_desc_html: "El <strong class=\"labif-hl\">Latin American Bitcoin Impact Fund — LABIF</strong> es una iniciativa estratégica para coordinar y amplificar capital en apoyo a la adopción, educación y expansión del ecosistema Bitcoin en Latinoamérica. Establecido para 2026 y diseñado para renovarse año a año, el Fondo busca movilizar sponsors alineados para fortalecer la infraestructura Bitcoin en la región. Enfoque en <strong>Capital Coordinado</strong>: financiamiento recurrente y anual con selección rigurosa para builders de alto impacto.",
    tag_conference: "Conferencia Anual",
    labitconf_cta: "Ver sitio web →",
    p0_desc: "La conferencia Bitcoin más antigua del mundo en actividad. Desde 2013, reúne cada año a +200 speakers y +10.000 asistentes de toda Iberoamérica.",
    tag_iniciativa: "Iniciativa FBI",
    labif_sponsors_label: "Sponsors:",
    labif_year: "Para el 2026:",
    labif_cta: "Ver en Geyser →",
    labif_book_cta: "Ver libro →",
    contacto_label: "Hablemos",
    contacto_title: "Contacto",
    contacto_intro: "¿Querés involucrarte, patrocinar un proyecto o conocer más sobre la Fundación? Escríbenos.",
    contact_note: "Se habla español",
    contact_location: "Con registro y oficina central en Uruguay.",
    footer_copy: "© 2026 Fundación Bitcoin Iberoamérica. Todos los derechos reservados.",
    labif_awarded_label: "Proyectos Financiados — LABIF 2026",
    labif_awarded_intro: "Algunos de los proyectos e iniciativas que reciben apoyo de la <strong class=\"labif-hl\">LABIF</strong> — <strong class=\"labif-hl\">Latin America Bitcoin Impact Fund</strong>.",
    tag_direct_grant: "Direct Grant",
    labif_p1_title: "Scaling Grassroots Bitcoin Education Across Latin America",
    labif_p1_desc: "El fondo LABIF permite desarrollar educación gratuita en campo y un modelo en línea para sustentarla a largo plazo en toda la región.",
    labif_p2_title: "Bitcoin Berlin, El Salvador",
    labif_p2_desc: "Crear una economía circular Bitcoin en el pueblo montañoso de Berlín, El Salvador.",
    labif_p3_title: "Satoshilemu: Surfing the Orange Wave",
    labif_p3_desc: "Convertir Pichilemu en una ciudad Bitcoin viva donde los locales ganan, gastan y ahorran en sats.",
    labif_p4_title: "BTC Isla by Satoshi's Legacy",
    labif_p4_desc: "Construyendo una economía circular Bitcoin en Isla Mujeres mediante educación, adopción comercial y comunidad.",
    labif_p5_title: "Bitcoin Dominicana",
    labif_p5_desc: "Ayudar a personas, negocios y comunidades a aprender, usar y construir con Bitcoin en toda la República Dominicana.",
    labif_p6_title: "Circular Economy and Education for young generation",
    labif_p6_desc: "Mejorar la usabilidad de Bitcoin y llevar educación financiera y empoderamiento personal a la nueva generación.",
    labif_p7_title: "Casa Bitcoin",
    labif_p7_desc: "Llevar alfabetización Bitcoin a adultos mayores y emprendedores locales en toda América Latina.",
    labif_p8_title: "Bitcoin Arena — Renovate sports gym for Roatan kids",
    labif_p8_desc: "Renovar un gimnasio comunitario para que los niños de Roatán puedan hacer deportes, inspirarse y aprender Bitcoin.",
    labif_p9_title: "Schools and Bitcoin Project",
    labif_p9_desc: "Difundir el potencial de la moneda descentralizada y la educación financiera en escuelas de toda la región.",
    tag_aliado_hon: "Aliado Honorífico",
    beorange_desc: "El punto de encuentro de la comunidad bitcoiner de Uruguay. Evento Bitcoin-only que combina charlas, paneles, talleres y networking. Cierre oficial de la Bitcoin Week Uruguay.",
    og_title: "Fundacion Bitcoin Iberoamerica",
    og_description: "Promoviendo educación, innovación y adopción de Bitcoin en Iberoamerica. Organizacion sin fines de lucro pionera en la región.",
  },
  en: {
    nav_mision: "Mission",
    nav_proyectos: "Projects",
    nav_equipo: "Team",
    nav_contacto: "Contact",
    equipo_label: "Who we are",
    equipo_title: "Team",
    equipo_dir_label: "Leadership",
    equipo_socios_label: "Founders",
    role_director: "Director",
    role_socio: "Founder",
    hero_founded: "Since 2014",
    hero_sub: "Promoting Bitcoin education, innovation, and adoption across Latin America, Spain, and Portugal.",
    hero_cta: "Explore our projects",
    mision_label: "Who we are",
    mision_title: "Our Mission",
    mision_text: "Fundación Bitcoin Iberoamérica is a pioneering nonprofit organization in the region, dedicated to promoting the development and adoption of Bitcoin as pillars of financial freedom, privacy, and technological sovereignty. We drive this change through high-impact local initiatives and strong global cooperation across the Ibero-American space.",
    stat_founded: "Year of founding",
    stat_paises: "Countries with active presence",
    stat_labif: "LABIF Fund 2026",
    pillar_edu_title: "Education",
    pillar_edu_desc: "We build communities with financial and technological knowledge based on Bitcoin.",
    pillar_inn_title: "Innovation",
    pillar_inn_desc: "We fund developers and projects building on the Bitcoin network.",
    pillar_ado_title: "Adoption",
    pillar_ado_desc: "We drive the regional ecosystem through events, grants, and grassroots initiatives.",
    proyectos_label: "What we support",
    proyectos_title: "Projects & Initiatives We Support",
    proyectos_intro: "Some of the most outstanding projects and initiatives supported by the Fundación Bitcoin Iberoamérica.",
    p1_title: "Librería de Satoshi",
    p1_desc: "Funding and distribution of Bitcoin literature in Spanish and Portuguese to democratize knowledge.",
    p2_title: "Escuelita Bitcoin",
    p2_desc: "Bitcoin financial education program aimed at communities with limited access to the banking system.",
    p3_title: "Bitcoineta de Argentina al Mundo",
    p3_desc: "Itinerant Bitcoin education vehicles active in Argentina, Chile, El Salvador, Kenya, Europe, Paraguay, and many more.",
    p4_title: "ONG Bitcoin Argentina",
    p4_desc: "Nonprofit focused on Argentina promoting Bitcoin as open technology for financial freedom. Runs workshops in schools and universities, drives decentralization initiatives, and advocates for self-custody.",
    p5_title: "Regional Events",
    p5_desc: "We sponsor BitcoinTalks and Blockchain Summit (Uruguay), Bitcoast (Chile), and B2B events in Mexico.",
    p6_title: "B·Arte Prize",
    p6_desc: "Art competition by ONG Bitcoin Argentina to design a Satoshi Nakamoto monument in Buenos Aires. Over 300 participants with prizes awarded in Bitcoin.",
    tag_arte: "Art & Culture",
    p7_desc_html: "The <strong class=\"labif-hl\">Latin American Bitcoin Impact Fund — LABIF</strong> is a strategic initiative designed to coordinate and amplify capital supporting Bitcoin adoption, education, and ecosystem expansion across Latin America. Established for 2026 and designed to be renewed year by year, the Fund seeks to mobilize aligned sponsors to strengthen Bitcoin infrastructure in the region. We focus on <strong>Coordinated Capital</strong>—providing recurring, annual funding and deep vetting for high-impact builders.",
    tag_conference: "Annual Conference",
    labitconf_cta: "Visit website →",
    p0_desc: "The world's oldest active Bitcoin conference. Since 2013, it brings together 200+ speakers and 10,000+ attendees from across Latin America, Spain, and Portugal.",
    tag_iniciativa: "FBI Initiative",
    labif_sponsors_label: "Sponsors:",
    labif_year: "For 2026:",
    labif_cta: "View on Geyser →",
    labif_book_cta: "View book →",
    contacto_label: "Get in touch",
    contacto_title: "Contact",
    contacto_intro: "Want to get involved, sponsor a project, or learn more about the Foundation? Write to us.",
    contact_note: "We speak Spanish & English",
    contact_location: "Registered and headquartered in Uruguay.",
    footer_copy: "© 2026 Fundación Bitcoin Iberoamérica. All rights reserved.",
    labif_awarded_label: "Projects Awarded — LABIF 2026",
    labif_awarded_intro: "Some of the projects and initiatives supported by <strong class=\"labif-hl\">LABIF</strong> — <strong class=\"labif-hl\">Latin America Bitcoin Impact Fund</strong>.",
    tag_direct_grant: "Direct Grant",
    labif_p1_title: "Scaling Grassroots Bitcoin Education Across Latin America",
    labif_p1_desc: "LABIF funding helps run free field education now and an online model built to sustain it long term across the region.",
    labif_p2_title: "Bitcoin Berlin, El Salvador",
    labif_p2_desc: "Creating a Bitcoin circular economy in the mountain town of Berlin, El Salvador.",
    labif_p3_title: "Satoshilemu: Surfing the Orange Wave",
    labif_p3_desc: "Turning Pichilemu into a living Bitcoin Town where locals earn, spend and save in sats.",
    labif_p4_title: "BTC Isla by Satoshi's Legacy",
    labif_p4_desc: "Building a Bitcoin Circular Economy in Isla Mujeres through education, merchant adoption, and community.",
    labif_p5_title: "Bitcoin Dominicana",
    labif_p5_desc: "Helping people, businesses and communities learn, use and build with Bitcoin across the Dominican Republic.",
    labif_p6_title: "Circular Economy and Education for young generation",
    labif_p6_desc: "Enhancing Bitcoin usability and bringing financial education and personal empowerment to the new generation.",
    labif_p7_title: "Casa Bitcoin",
    labif_p7_desc: "Bringing Bitcoin literacy to older adults and local entrepreneurs across Latin America.",
    labif_p8_title: "Bitcoin Arena — Renovate sports gym for Roatan kids",
    labif_p8_desc: "Renovating a community gym in Roatan into a place where kids can do sports, get inspired, and learn Bitcoin.",
    labif_p9_title: "Schools and Bitcoin Project",
    labif_p9_desc: "Disseminating the potential of decentralized currency and financial education in schools across the region.",
    tag_aliado_hon: "Honorary Ally",
    beorange_desc: "The meeting point of Uruguay's bitcoiner community. A Bitcoin-only event combining talks, panels, workshops and networking. Official closing of Bitcoin Week Uruguay.",
    og_title: "Fundacion Bitcoin Iberoamerica",
    og_description: "Promoting Bitcoin education, innovation, and adoption across Iberoamerica. A pioneering nonprofit organization in the region.",
  },
  pt: {
    nav_mision: "Missão",
    nav_proyectos: "Projetos",
    nav_equipo: "Equipe",
    nav_contacto: "Contato",
    equipo_label: "Quem somos",
    equipo_title: "Equipe",
    equipo_dir_label: "Direção",
    equipo_socios_label: "Fundadores",
    role_director: "Diretor",
    role_socio: "Fundador",
    hero_founded: "Estabelecida em 2014",
    hero_sub: "Promovendo educação, inovação e adoção do Bitcoin na América Latina, Espanha e Portugal.",
    hero_cta: "Conheça nossos projetos",
    mision_label: "Quem somos",
    mision_title: "Nossa Missão",
    mision_text: "A Fundación Bitcoin Iberoamérica é uma organização sem fins lucrativos, pioneira na região, dedicada a promover o desenvolvimento e a adoção do Bitcoin como pilares de liberdade financeira, privacidade e soberania tecnológica. Impulsionamos essa mudança por meio de iniciativas locais de alto impacto e uma sólida cooperação global em todo o espaço Ibero-Americano.",
    stat_founded: "Ano de fundação",
    stat_paises: "Países com presença ativa",
    stat_labif: "Fundo LABIF 2026",
    pillar_edu_title: "Educação",
    pillar_edu_desc: "Formamos comunidades com conhecimento financeiro e tecnológico baseado em Bitcoin.",
    pillar_inn_title: "Inovação",
    pillar_inn_desc: "Financiamos desenvolvedores e projetos que constroem sobre a rede Bitcoin.",
    pillar_ado_title: "Adoção",
    pillar_ado_desc: "Impulsionamos o ecossistema regional com eventos, grants e iniciativas de base.",
    proyectos_label: "O que apoiamos",
    proyectos_title: "Projetos e Iniciativas que apoiamos",
    proyectos_intro: "Alguns dos projetos e iniciativas mais destacados que recebem o apoio da Fundación Bitcoin Iberoamérica.",
    p1_title: "Librería de Satoshi",
    p1_desc: "Financiamento e difusão de literatura Bitcoin em espanhol e português para democratizar o conhecimento.",
    p2_title: "Escuelita Bitcoin",
    p2_desc: "Programa de educação financeira com Bitcoin voltado a comunidades com acesso limitado ao sistema bancário.",
    p3_title: "Bitcoineta de Argentina al Mundo",
    p3_desc: "Veículos itinerantes de educação Bitcoin ativos na Argentina, Chile, El Salvador, Quênia, Europa, Paraguai e muitos outros.",
    p4_title: "ONG Bitcoin Argentina",
    p4_desc: "Organização sem fins lucrativos com foco na Argentina que promove o Bitcoin como tecnologia aberta para a liberdade financeira. Organiza oficinas em escolas e universidades, impulsiona a descentralização e defende a autocustódia.",
    p5_title: "Eventos Regionais",
    p5_desc: "Patrocinamos BitcoinTalks e Blockchain Summit (Uruguai), Bitcoast (Chile) e eventos B2B no México.",
    p6_title: "Prêmio B·Arte",
    p6_desc: "Concurso de arte promovido pela ONG Bitcoin Argentina para projetar o monumento a Satoshi Nakamoto em Buenos Aires. Mais de 300 participantes e prêmios em Bitcoin.",
    tag_arte: "Arte & Cultura",
    p7_desc_html: "O <strong class=\"labif-hl\">Latin American Bitcoin Impact Fund — LABIF</strong> é uma iniciativa estratégica para coordenar e amplificar capital em apoio à adoção, educação e expansão do ecossistema Bitcoin na América Latina. Estabelecido para 2026 e projetado para ser renovado ano a ano, o Fundo busca mobilizar patrocinadores alinhados para fortalecer a infraestrutura Bitcoin na região. Foco em <strong>Capital Coordenado</strong>: financiamento recorrente e anual com seleção rigorosa para builders de alto impacto.",
    tag_conference: "Conferência Anual",
    labitconf_cta: "Ver site →",
    p0_desc: "A conferência Bitcoin mais antiga do mundo ainda em atividade. Desde 2013, reúne +200 palestrantes e +10.000 participantes de toda a América Latina, Espanha e Portugal.",
    tag_iniciativa: "Iniciativa FBI",
    labif_sponsors_label: "Sponsors:",
    labif_year: "Para 2026:",
    labif_cta: "Ver na Geyser →",
    labif_book_cta: "Ver livro →",
    contacto_label: "Fale conosco",
    contacto_title: "Contato",
    contacto_intro: "Quer se envolver, patrocinar um projeto ou saber mais sobre a Fundação? Escreva para nós.",
    contact_note: "Falamos português",
    contact_location: "Registrada e com sede central no Uruguai.",
    footer_copy: "© 2026 Fundación Bitcoin Iberoamérica. Todos os direitos reservados.",
    labif_awarded_label: "Projetos Financiados — LABIF 2026",
    labif_awarded_intro: "Alguns dos projetos e iniciativas que recebem apoio da <strong class=\"labif-hl\">LABIF</strong> — <strong class=\"labif-hl\">Latin America Bitcoin Impact Fund</strong>.",
    tag_direct_grant: "Direct Grant",
    labif_p1_title: "Scaling Grassroots Bitcoin Education Across Latin America",
    labif_p1_desc: "O fundo LABIF permite desenvolver educação gratuita no campo e um modelo online para sustentá-la a longo prazo em toda a região.",
    labif_p2_title: "Bitcoin Berlin, El Salvador",
    labif_p2_desc: "Criar uma economia circular Bitcoin na cidade montanhosa de Berlín, El Salvador.",
    labif_p3_title: "Satoshilemu: Surfing the Orange Wave",
    labif_p3_desc: "Transformar Pichilemu em uma cidade Bitcoin viva onde moradores ganham, gastam e poupam em sats.",
    labif_p4_title: "BTC Isla by Satoshi's Legacy",
    labif_p4_desc: "Construindo uma economia circular Bitcoin em Isla Mujeres por meio de educação, adoção comercial e comunidade.",
    labif_p5_title: "Bitcoin Dominicana",
    labif_p5_desc: "Ajudar pessoas, negócios e comunidades a aprender, usar e construir com Bitcoin em toda a República Dominicana.",
    labif_p6_title: "Circular Economy and Education for young generation",
    labif_p6_desc: "Melhorar a usabilidade do Bitcoin e levar educação financeira e empoderamento pessoal para a nova geração.",
    labif_p7_title: "Casa Bitcoin",
    labif_p7_desc: "Levando alfabetização Bitcoin para idosos e empreendedores locais em toda a América Latina.",
    labif_p8_title: "Bitcoin Arena — Renovate sports gym for Roatan kids",
    labif_p8_desc: "Renovar um ginásio comunitário em Roatan para que crianças possam fazer esportes, se inspirar e aprender Bitcoin.",
    labif_p9_title: "Schools and Bitcoin Project",
    labif_p9_desc: "Disseminar o potencial da moeda descentralizada e a educação financeira em escolas por toda a região.",
    tag_aliado_hon: "Aliado Honorário",
    beorange_desc: "O ponto de encontro da comunidade bitcoiner do Uruguai. Evento Bitcoin-only com palestras, painéis, oficinas e networking. Encerramento oficial da Bitcoin Week Uruguay.",
    og_title: "Fundacion Bitcoin Iberoamerica",
    og_description: "Promovendo educação, inovação e adoção do Bitcoin na Iberoamerica. Organização sem fins lucrativos pioneira na região.",
  }
};

// ── CAMBIO DE IDIOMA ──
function setLang(lang) {
  const t = translations[lang];
  if (!t) return;
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  localStorage.setItem('lang', lang);
  const localeMap = { es: 'es_ES', en: 'en_US', pt: 'pt_BR' };
  ['meta[property="og:title"]', 'meta[name="twitter:title"]']
    .forEach(sel => document.querySelector(sel)?.setAttribute('content', t.og_title));
  ['meta[property="og:description"]', 'meta[name="twitter:description"]', 'meta[name="description"]']
    .forEach(sel => document.querySelector(sel)?.setAttribute('content', t.og_description));
  document.querySelector('meta[property="og:locale"]')?.setAttribute('content', localeMap[lang] || 'es_ES');
  highlightBitcoin();
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

function highlightBitcoin() {
  document.querySelectorAll('p[data-i18n], p[data-i18n-html], h3[data-i18n], .mission-text').forEach(el => {
    let html = el.innerHTML;
    if (!html.includes('Bitcoin')) return;
    html = html.replace(/Fundaci[oó]n Bitcoin Iberoam[eé]rica/g, '<strong>Fundación Bitcoin Iberoamérica</strong>');
    html = html.replace(/\bBitcoin\b/g, '<strong class="btc">Bitcoin</strong>');
    el.innerHTML = html;
  });
  // Escalonar animaciones para que cada "Bitcoin" esté en una fase diferente
  document.querySelectorAll('.btc').forEach((el, i) => {
    el.style.animationDelay = `-${(i * 0.55) % 3}s`;
  });
}


const savedLang = localStorage.getItem('lang') || 'es';
setLang(savedLang);

// ── NAVBAR ──
const navbar = document.getElementById('navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}, { passive: true });

navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

// Canvas de partículas (red Bitcoin) en el hero
(function () {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;

  const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const N = 55;
  const pts = Array.from({ length: N }, () => ({
    x: Math.random() * W, y: Math.random() * H,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r: Math.random() * 1.8 + 0.8,
  }));

  (function frame() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = pts[i].x - pts[j].x, dy = pts[i].y - pts[j].y;
        const d = Math.hypot(dx, dy);
        if (d < 130) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(247,147,26,${0.18 * (1 - d / 130)})`;
          ctx.lineWidth = 0.7;
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.stroke();
        }
      }
      ctx.beginPath();
      ctx.arc(pts[i].x, pts[i].y, pts[i].r, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(247,147,26,0.55)';
      ctx.fill();
      pts[i].x += pts[i].vx; pts[i].y += pts[i].vy;
      if (pts[i].x < 0 || pts[i].x > W) pts[i].vx *= -1;
      if (pts[i].y < 0 || pts[i].y > H) pts[i].vy *= -1;
    }
    requestAnimationFrame(frame);
  })();
})();

// Animaciones al hacer scroll
const scrollObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('is-visible'); scrollObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.section-label').forEach(el => { el.classList.add('anim-left'); scrollObs.observe(el); });
document.querySelectorAll('section h2').forEach(el => { el.classList.add('anim-up'); scrollObs.observe(el); });
document.querySelectorAll('.mission-text').forEach(el => { el.classList.add('anim-up'); scrollObs.observe(el); });
document.querySelectorAll('.section-intro').forEach(el => { el.classList.add('anim-up'); scrollObs.observe(el); });
document.querySelectorAll('.hb-title-wrap').forEach(el => { el.classList.add('anim-scale'); scrollObs.observe(el); });
document.querySelectorAll('.pillar').forEach((el, i) => {
  el.classList.add('anim-up');
  el.style.transitionDelay = `${i * 0.12}s`;
  scrollObs.observe(el);
});
document.querySelectorAll('.project-card').forEach((el, i) => {
  el.classList.add('anim-up');
  el.style.transitionDelay = `${(i % 3) * 0.1}s`;
  scrollObs.observe(el);
});
document.querySelectorAll('.labif-total, .labif-sponsors').forEach(el => { el.classList.add('anim-up'); scrollObs.observe(el); });
document.querySelectorAll('.contact-card').forEach((el, i) => {
  el.classList.add('anim-up');
  el.style.transitionDelay = `${i * 0.1}s`;
  scrollObs.observe(el);
});

// Tilt 3D en project cards
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const rotX = (((e.clientY - r.top) / r.height) - 0.5) * -10;
    const rotY = (((e.clientX - r.left) / r.width) - 0.5) * 10;
    card.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-6px) scale(1.01)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// Contador animado en LABIF cuando entra en pantalla
const lbtcEl = document.querySelector('.lbtc');
const lusdEl = document.querySelector('.lusd');
if (lbtcEl && lusdEl) {
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return;
    obs.disconnect();
    const t0 = performance.now();
    (function tick(now) {
      const p = Math.min((now - t0) / 1800, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      lbtcEl.textContent = (ease * 2.51).toFixed(2);
      lusdEl.textContent = Math.round(ease * 164000).toLocaleString('es-AR');
      if (p < 1) requestAnimationFrame(tick);
    })(t0);
  }, { threshold: 0.6 }).observe(lbtcEl.closest('.labif-total'));
}
