"use client";

import Image from "next/image";
import { useEffect, useState, useRef, type ReactNode } from "react";
import {
  AnimatePresence,
  MotionConfig,
  motion,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Phone,
  MapPin,
  Menu,
  Scale,
  BriefcaseBusiness,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import GlowingButton from "./components/GlowingButton";

const instagram = "https://www.instagram.com/adelaideferreiraadvocacia/";
const whatsapp = "https://wa.me/553835316697?text=" + encodeURIComponent("Olá! Gostaria de informações sobre o atendimento da Adelaide Ferreira Advogados Associados.");
const maps = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("Adelaide Ferreira Advogados Associados, Beco Lulu Quirino, 116, Centro, Diamantina - MG, 39100-000");
const reviews = "https://www.google.com/maps?cid=1761496273701398590";

function InstagramMark({
  size = 16,
  strokeWidth = 1.8,
}: {
  size?: number;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.1" />
      <circle cx="17.8" cy="6.4" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  );
}

const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.04 } },
};

const areas = [
  {
    title: "Direito Civil", icon: Scale,
    summary: "Orientação para questões da vida civil, das relações pessoais e do patrimônio.",
    details: "A atuação civil considera os documentos e as circunstâncias de cada caso para esclarecer direitos, deveres e os caminhos possíveis, tanto na prevenção de conflitos quanto no acompanhamento de demandas.",
    topics: ["Relações e obrigações civis", "Contratos e patrimônio", "Análise e acompanhamento de demandas"],
  },
  {
    title: "Direito Previdenciário", icon: UsersRound,
    summary: "Atenção aos benefícios previdenciários e aos próximos passos de cada requerimento.",
    details: "O atendimento previdenciário parte da análise do histórico e da documentação apresentada. A orientação esclarece os procedimentos relacionados a benefícios e considera as particularidades de cada situação.",
    topics: ["Aposentadorias", "Benefícios previdenciários", "Requerimentos e acompanhamento de processos"],
  },
  {
    title: "Direito Trabalhista", icon: BriefcaseBusiness,
    summary: "Clareza sobre direitos, deveres e questões que envolvem as relações de trabalho.",
    details: "A orientação trabalhista ajuda a compreender as questões decorrentes da relação de trabalho. Cada demanda é analisada individualmente, com atenção às informações, aos documentos e às possibilidades jurídicas.",
    topics: ["Relações de trabalho", "Direitos e obrigações trabalhistas", "Análise e acompanhamento de demandas"],
  },
];

function Heading({
  eyebrow,
  children,
  description,
  light = false,
}: {
  eyebrow: string;
  children: ReactNode;
  description?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <p className={light ? "eyebrow-light mb-4" : "eyebrow mb-4"}>
        {eyebrow}
      </p>
      <h2
        className={
          light
            ? "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-white sm:text-5xl lg:text-[3.55rem]"
            : "font-serif text-4xl leading-[1.07] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.55rem]"
        }
      >
        {children}
      </h2>
      {description && (
        <p
          className={
            light
              ? "mt-5 max-w-xl text-[15px] leading-7 text-white/68"
              : "mt-5 max-w-xl text-[15px] leading-7 text-ink-soft"
          }
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeArea, setActiveArea] =
    useState<(typeof areas)[number] | null>(null);

  const dialogRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!activeArea) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => dialogRef.current?.querySelector<HTMLButtonElement>("button")?.focus(), 0);
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveArea(null);
      if (event.key !== "Tab") return;
      const controls = dialogRef.current?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])');
      if (!controls?.length) return;
      const first = controls[0];
      const last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [activeArea]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <MotionConfig reducedMotion="user">
      <main className="overflow-hidden bg-ivory text-ink">
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-ivory/95 backdrop-blur-xl">
          <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-5 sm:h-[88px] sm:px-8 lg:px-12">
            <a
              href="#inicio"
              aria-label="Adelaide Ferreira — início"
              onClick={closeMenu}
              className="shrink-0"
            >
              <Image
                src="/Logotipo jurídico Adelaide Ferreira em azul-marinho.png"
                width={2043}
                height={770}
                alt="Adelaide Ferreira Advogados Associados"
                preload
                className="h-auto w-[180px] sm:w-[210px]"
                sizes="(max-width: 640px) 180px, 210px"
              />
            </a>
            <nav
              aria-label="Navegação principal"
              className="hidden items-center gap-7 lg:flex"
            >
              <a className="nav-link" href="#inicio">
                Início
              </a>
              <a className="nav-link" href="#atuacao">
                Atuação
              </a>
              <a className="nav-link" href="#sobre">
                Sobre
              </a>
              <a className="nav-link" href="#avaliacoes">
                Google
              </a>
              <a className="nav-link" href="#contato">
                Contato
              </a>
            </nav>
            <div className="hidden items-center gap-3 lg:flex">
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram de Adelaide Ferreira"
                className="grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
              >
                <InstagramMark size={17} strokeWidth={1.7} />
              </a>
              <GlowingButton
                href={whatsapp}
                target="_blank"
                size="sm"
                className="rounded-full"
              >
                WhatsApp <ArrowUpRight size={14} />
              </GlowingButton>
            </div>
            <button
              type="button"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              className="grid size-11 place-items-center rounded-full border border-ink/15 lg:hidden"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
          <AnimatePresence>
            {menuOpen && (
              <motion.nav
                id="mobile-navigation"
                aria-label="Navegação móvel"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.22 }}
                className="overflow-hidden border-t border-ink/10 bg-ivory px-6 lg:hidden"
              >
                <div className="mx-auto flex max-w-7xl flex-col gap-1 py-4">
                  {[
                    ["Início", "#inicio"],
                    ["Atuação", "#atuacao"],
                    ["Sobre", "#sobre"],
                    ["Avaliações no Google", "#avaliacoes"],
                    ["Contato", "#contato"],
                  ].map(([label, href]) => (
                    <a
                      key={label}
                      href={href}
                      onClick={closeMenu}
                      className="py-3 text-sm text-ink-soft transition-colors hover:text-brand-700"
                    >
                      {label}
                    </a>
                  ))}
                  <a
                    className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-brand-700 px-5 py-3.5 text-xs font-semibold uppercase tracking-[0.13em] text-white"
                    href={whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMenu}
                  >
                    <Phone size={15} /> WhatsApp
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </header>

        <section
          id="inicio"
          className="relative isolate scroll-mt-24 border-b border-ink/10"
        >
          <div className="pointer-events-none absolute -right-36 top-12 -z-10 size-[34rem] rounded-full bg-brand-100/60 blur-3xl" />
          <div className="mx-auto grid min-h-[640px] max-w-7xl items-center gap-12 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[710px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:py-20">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="relative z-10 max-w-2xl lg:py-6"
            >
              <motion.p variants={reveal} className="eyebrow mb-7">
                <span className="size-2 rounded-full bg-brand-600" />
                Advogados associados · Diamantina, MG
              </motion.p>
              <motion.h1
                variants={reveal}
                className="max-w-[720px] font-serif text-[3.3rem] leading-[0.98] tracking-[-0.045em] text-ink sm:text-6xl lg:text-[5.05rem]"
              >
                Advocacia com{" "}
                <span className="italic text-brand-700">clareza</span>, estratégia
                e cuidado.
              </motion.h1>
              <motion.p
                variants={reveal}
                className="mt-7 max-w-xl text-[15px] leading-7 text-ink-soft sm:text-base sm:leading-8"
              >
                Atuação em Direito Civil, Previdenciário e Trabalhista, com
                atenção à sua história e orientação para compreender seus
                direitos e os próximos passos.
              </motion.p>
              <motion.div
                variants={reveal}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-full"
                >
                  <Phone size={16} /> Fale pelo WhatsApp
                </GlowingButton>
                <a
                  href="#atuacao"
                  className="group inline-flex items-center gap-2 px-1 py-3 text-sm font-medium text-ink transition-colors hover:text-brand-700"
                >
                  Áreas de atuação{" "}
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </motion.div>
              <motion.div
                variants={reveal}
                className="mt-11 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-ink/10 pt-6 text-xs text-ink-soft"
              >
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-brand-700" />
                  Diamantina · Minas Gerais
                </span>
                <span className="inline-flex items-center gap-2">
                  <Sparkles size={15} className="text-brand-700" />
                  (38) 3531-6697
                </span>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.975, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.16,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative mx-auto w-full max-w-[460px] lg:ml-auto lg:mr-3"
            >
              <div className="absolute -inset-3 rotate-2 border border-brand-600/25 sm:-inset-4" />
              <div className="relative aspect-[0.82] overflow-hidden bg-brand-100">
                <Image
                  src="/imgi_41_799724609_18188151403397595_2357383396771871559_n.jpg"
                  alt="Dra. Adelaide Ferreira, advogada"
                  fill
                  preload
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 40vw"
                  className="object-cover object-[50%_12%]"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/55 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-3 text-white sm:bottom-8 sm:left-8 sm:right-8">
                  <div>
                    <p className="font-serif text-2xl">Adelaide Ferreira</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/80">
                      Advogados Associados
                    </p>
                  </div>
                  <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/60">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
              <div className="absolute -left-3 top-[15%] border border-ink/10 bg-ivory px-4 py-3 text-[10px] font-medium tracking-[0.1em] text-ink shadow-card sm:-left-10 sm:px-5">
                ESCUTA · INFORMAÇÃO · CUIDADO
              </div>
              <span className="absolute -bottom-8 -right-7 -z-10 size-28 rounded-full border border-brand-600/25" />
            </motion.div>
          </div>
        </section>

        <section
          aria-label="Informações de atendimento"
          className="border-b border-ink/10 bg-white/60"
        >
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 sm:gap-4 sm:px-8 lg:px-12">
            {[
              ["3 áreas", "Civil, Previdenciária e Trabalhista"],
              ["Diamantina", "Sede no Centro"],
              ["Presencial", "Também em Felício dos Santos e Itamarandiba"],
            ].map(([value, label], index) => (
              <div
                key={value}
                className={
                  index > 0
                    ? "flex items-center gap-4 sm:justify-center sm:border-l sm:border-ink/10"
                    : "flex items-center gap-4 sm:justify-center"
                }
              >
                <span className="font-serif text-2xl text-brand-700 sm:text-[1.7rem]">
                  {value}
                </span>
                <span className="max-w-[145px] text-[11px] leading-5 text-ink-soft">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section
          id="atuacao"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            >
              <Heading
                eyebrow="ÁREAS DE ATUAÇÃO"
                description="Informação jurídica e acompanhamento cuidadoso, considerando as particularidades de cada situação."
              >
                Orientação nos momentos que{" "}
                <span className="italic text-brand-700">pedem cuidado.</span>
              </Heading>
              <p className="max-w-[250px] pb-1 text-xs leading-6 text-ink-soft">
                Selecione uma área para conhecer os temas atendidos.
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={stagger}
              className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
              {areas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <motion.article
                    key={area.title}
                    variants={reveal}
                    className="group flex min-h-[290px] flex-col border border-ink/10 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-600/40 hover:shadow-card sm:p-8"
                  >
                    <div className="flex items-start justify-between">
                      <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                        <Icon size={21} strokeWidth={1.5} />
                      </span>
                      <span className="font-serif text-2xl text-brand-600/65">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="mt-7 max-w-sm font-serif text-[1.8rem] leading-tight text-ink">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[13px] leading-6 text-ink-soft">
                      {area.summary}
                    </p>
                    <button
                      type="button"
                      onClick={() => setActiveArea(area)}
                      className="group/link mt-auto inline-flex w-fit items-center gap-2 pt-7 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800 hover:text-brand-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-700"
                    >
                      Saiba mais{" "}
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover/link:translate-x-1"
                      />
                    </button>
                  </motion.article>
                );
              })}
            </motion.div>
          </div>
        </section>

        <section
          id="sobre"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={reveal}
              className="relative mx-auto w-full max-w-[560px] pb-5 pr-5 sm:pb-7 sm:pr-7"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-100">
                <Image
                  src="/imgi_36_791996739_18188447527397595_8871868257366577399_n.jpg"
                  alt="Material institucional da Adelaide Ferreira Advogados Associados, celebrando 18 anos de história"
                  fill
                  sizes="(max-width: 1024px) 85vw, 43vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-2 top-8 -z-10 size-24 border-l border-t border-brand-600/40 sm:-left-5 sm:top-10 sm:size-32" />
              <div className="absolute bottom-0 left-5 max-w-[245px] border-l-2 border-brand-600 bg-ivory px-5 py-4 shadow-card sm:left-8">
                <p className="font-serif text-xl text-ink">
                  18 anos de história
                </p>
                <p className="mt-1 text-[11px] leading-5 text-ink-soft">
                  Uma trajetória dedicada à advocacia.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
            >
              <motion.p variants={reveal} className="eyebrow">
                SOBRE ADELAIDE FERREIRA
              </motion.p>
              <motion.h2
                variants={reveal}
                className="mt-4 max-w-2xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.45rem]"
              >
                Cada história merece ser recebida com{" "}
                <span className="italic text-brand-700">atenção.</span>
              </motion.h2>
              <motion.p
                variants={reveal}
                className="mt-6 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Adelaide Ferreira Advogados Associados atua nas áreas Civil,
                Previdenciária e Trabalhista, com sede em Diamantina, Minas
                Gerais. A escuta e a análise de cada situação orientam um
                atendimento claro, próximo e responsável.
              </motion.p>
              <motion.p
                variants={reveal}
                className="mt-4 max-w-xl text-[15px] leading-7 text-ink-soft"
              >
                Com uma trajetória de 18 anos de história, o escritório também
                oferece atendimento presencial em Felício dos Santos e
                Itamarandiba. Entre em contato para consultar a disponibilidade
                e organizar seu atendimento.
              </motion.p>
              <motion.a
                variants={reveal}
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="group mt-8 inline-flex items-center gap-2 border-b border-brand-700/40 pb-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800 transition-colors hover:border-brand-700 hover:text-brand-600"
              >
                Acesse o Instagram{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </motion.a>
            </motion.div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-950 py-20 text-white sm:py-28 lg:py-32">
          <div className="pointer-events-none absolute -left-24 top-1/4 size-80 rounded-full bg-brand-800/55 blur-3xl" />
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="UMA ATUAÇÃO COM CUIDADO"
              light
              description="Informação, escuta e análise fazem parte de uma orientação jurídica responsável."
            >
              Clareza para compreender cada{" "}
              <span className="italic text-brand-200">etapa.</span>
            </Heading>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={stagger}
              className="divide-y divide-white/15"
            >
              {[
                [
                  "01",
                  "Escuta atenta",
                  "Compreender o contexto é parte essencial de uma orientação cuidadosa.",
                ],
                [
                  "02",
                  "Informação acessível",
                  "Explicações claras ajudam a entender direitos, procedimentos e possibilidades.",
                ],
                [
                  "03",
                  "Respeito às particularidades",
                  "Cada pessoa tem uma história e circunstâncias que precisam ser consideradas.",
                ],
              ].map(([number, title, description]) => (
                <motion.div
                  key={number}
                  variants={reveal}
                  className="grid gap-3 py-6 first:pt-0 sm:grid-cols-[70px_1fr] sm:gap-5 sm:py-7"
                >
                  <span className="font-serif text-2xl text-brand-200">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl">{title}</h3>
                    <p className="mt-2 max-w-lg text-[13px] leading-6 text-white/65">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section
          id="conteudos"
          className="scroll-mt-24 bg-brand-50 py-20 sm:py-28"
        >
          <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid items-end gap-7 md:grid-cols-[1fr_auto]">
              <Heading
                eyebrow="CONTEÚDOS JURÍDICOS"
                description="Conteúdos e reflexões sobre a atuação jurídica compartilhados no perfil profissional."
              >
                Informação para conhecer melhor{" "}
                <span className="italic text-brand-700">seus direitos.</span>
              </Heading>
              <a
                href={instagram}
                target="_blank"
                rel="noreferrer"
                className="group mb-1 inline-flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-brand-800"
              >
                Ver no Instagram{" "}
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
            <div className="mt-11 grid gap-6">
              {[
                {
                  image: "/imgi_29_802457796_18188613466397595_192858623231029896_n.jpg",
                  alt: "Publicação de Adelaide Ferreira sobre processo, estratégia e técnica no Direito Previdenciário",
                  eyebrow: "Direito Previdenciário",
                  title: "Processo, estratégia e técnica em cada etapa.",
                },
              ].map((post, index) => (
                <motion.a
                  key={post.eyebrow}
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.62, delay: index * 0.08 }}
                  className="group grid overflow-hidden border border-ink/10 bg-white md:grid-cols-[0.85fr_1.15fr]"
                >
                  <div className="relative mx-auto aspect-[1350/1688] w-full max-w-[480px] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.alt}
                      fill
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 28vw"
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-end p-7 sm:p-8 lg:p-9">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700">
                      {post.eyebrow}
                    </span>
                    <h3 className="mt-3 font-serif text-3xl leading-tight text-ink">
                      {post.title}
                    </h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-brand-800">
                      Acompanhe no Instagram <ArrowUpRight size={14} />
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        <section
          id="avaliacoes"
          className="scroll-mt-24 bg-white py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <Heading
              eyebrow="PERFIL PÚBLICO"
              description="Conheça as experiências compartilhadas por clientes no perfil público de Adelaide Ferreira Advogados Associados no Google."
            >
              Informações de atendimento em um só{" "}
              <span className="italic text-brand-700">lugar.</span>
            </Heading>
            <div className="relative flex min-h-[245px] flex-col justify-between overflow-hidden border border-ink/10 bg-ivory p-7 sm:p-9">
              <div className="absolute -right-10 -top-16 size-56 rounded-full border border-brand-700/15" />
              <div className="absolute -right-2 -top-8 size-40 rounded-full border border-brand-700/15" />
              <div className="relative flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={20} strokeWidth={1.6} />
                </span>
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.17em] text-ink-soft">
                    Avaliações no Google
                  </span>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    24 avaliações no Google
                  </p>
                </div>
              </div>
              <div className="relative mt-8 flex flex-wrap items-end justify-between gap-5">
                <p className="max-w-xs text-[13px] leading-6 text-ink-soft">
                  Consulte as avaliações e informações atualizadas diretamente no Google.
                </p>
                <a
                  href={reviews}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Ver avaliações <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="scroll-mt-24 bg-ivory py-20 sm:py-28 lg:py-32"
        >
          <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-12">
            <div>
              <Heading
                eyebrow="CONTATO E LOCALIZAÇÃO"
                description="Atendimento em Diamantina, Felício dos Santos e Itamarandiba. Fale com o escritório para consultar a disponibilidade."
              >
                Um primeiro contato com{" "}
                <span className="italic text-brand-700">tranquilidade.</span>
              </Heading>
              <div className="mt-9 flex flex-col items-start gap-4">
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="lg"
                  className="rounded-full"
                >
                  <Phone size={16} /> Fale pelo WhatsApp
                </GlowingButton>
                <a href="tel:+553835316697" className="text-sm text-ink-soft hover:text-brand-700">Telefone: (38) 3531-6697</a>
                <a href={instagram} target="_blank" rel="noreferrer" className="text-[11px] text-ink-soft hover:text-brand-700">@adelaideferreiraadvocacia</a>
              </div>
            </div>
            <div className="relative overflow-hidden border border-ink/10 bg-white p-7 sm:p-10">
              <div className="absolute right-0 top-0 h-1 w-28 bg-brand-600" />
              <div className="flex items-center gap-4">
                <span className="grid size-12 place-items-center rounded-full bg-brand-50 text-brand-700">
                  <MapPin size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-700">
                    Endereço
                  </p>
                  <p className="mt-1 font-serif text-2xl text-ink">
                    Diamantina · MG
                  </p>
                </div>
              </div>
              <address className="mt-7 max-w-md not-italic text-[14px] leading-7 text-ink-soft">
                Beco Lulu Quirino, 116
                <br />
                Centro, Diamantina — MG
                <br />
                39100-000, Brasil
              </address>
              <div className="my-7 h-px bg-ink/10" />
              <div className="flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-ink-soft">
                  Consulte a localização antes de sua visita.
                </p>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.13em] text-ink transition-colors hover:border-brand-700 hover:text-brand-700"
                >
                  Abrir no mapa <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-brand-700 px-5 py-14 text-white sm:px-8 sm:py-16 lg:px-12">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
                ADELAIDE FERREIRA · ADVOGADOS ASSOCIADOS
              </p>
              <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
                Informação clara pode ajudar a organizar os próximos passos.
              </h2>
            </div>
            <a
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand-800 transition-transform hover:-translate-y-0.5"
            >
              Fale pelo WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>

        <footer className="bg-ink px-5 py-12 text-white sm:px-8 lg:px-12">
          <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <div className="inline-flex bg-white px-3 py-2">
                <Image
                  src="/Logotipo jurídico Adelaide Ferreira em azul-marinho.png"
                  width={2043}
                  height={770}
                  alt="Adelaide Ferreira Advogados Associados"
                  className="h-auto w-[240px]"
                  sizes="240px"
                />
              </div>
              <p className="mt-4 max-w-xs text-xs leading-6 text-white/65">
                Advocacia Civil, Previdenciária e Trabalhista em Diamantina e região.
              </p>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Navegação
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/75">
                <a className="footer-link" href="#atuacao">
                  Áreas de atuação
                </a>
                <a className="footer-link" href="#sobre">
                  Sobre o escritório
                </a>
                <a className="footer-link" href="#avaliacoes">
                  Perfil no Google
                </a>
                <a className="footer-link" href="#contato">
                  Contato e endereço
                </a>
              </div>
            </div>
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-200">
                Informações
              </h2>
              <div className="mt-4 flex flex-col items-start gap-3 text-xs text-white/75">
                <a
                  href={instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center gap-2"
                >
                  <InstagramMark size={14} /> @adelaideferreiraadvocacia
                </a>
                <a
                  href={maps}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-start gap-2"
                >
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  Beco Lulu Quirino, 116 — Centro
                </a>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/15 pt-5 text-[10px] text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} Adelaide Ferreira Advogados Associados. Todos os direitos
              reservados.
            </p>
            <p>
              Conteúdo informativo. Cada situação deve ser analisada
              individualmente.
            </p>
          </div>
        </footer>

        <AnimatePresence>
          {activeArea && (
            <motion.div
              className="fixed inset-0 z-50 flex items-end justify-center bg-ink/55 p-0 backdrop-blur-sm sm:items-center sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveArea(null)}
            >
              <motion.section
                ref={dialogRef}
                role="dialog"
                aria-modal="true"
                aria-labelledby="area-dialog-title"
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 16, scale: 0.99 }}
                transition={{ duration: 0.24 }}
                onClick={(event) => event.stopPropagation()}
                className="relative max-h-[90vh] w-full overflow-y-auto rounded-t-2xl bg-ivory p-7 shadow-card sm:max-w-xl sm:rounded-sm sm:p-10"
              >
                <button
                  type="button"
                  aria-label="Fechar detalhes da área"
                  onClick={() => setActiveArea(null)}
                  className="absolute right-5 top-5 grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:text-brand-700"
                >
                  <X size={18} />
                </button>
                <p className="eyebrow">ÁREA DE ATUAÇÃO</p>
                <h2
                  id="area-dialog-title"
                  className="mt-4 max-w-sm pr-10 font-serif text-4xl leading-tight text-ink"
                >
                  {activeArea.title}
                </h2>
                <p className="mt-5 text-sm leading-7 text-ink-soft">
                  {activeArea.details}
                </p>
                <ul className="mt-6 space-y-3">
                  {activeArea.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-3 text-sm text-ink"
                    >
                      <span className="size-1.5 rounded-full bg-brand-700" />
                      {topic}
                    </li>
                  ))}
                </ul>
                <GlowingButton
                  href={whatsapp}
                  target="_blank"
                  size="md"
                  className="mt-8 rounded-full"
                >
                  <Phone size={15} /> Conversar sobre esta área
                  <ArrowUpRight size={15} />
                </GlowingButton>
              </motion.section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </MotionConfig>
  );
}
