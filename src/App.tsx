import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  ShieldAlert, 
  MailWarning, 
  Bug, 
  Network, 
  EyeOff, 
  Lock, 
  Server, 
  FileCheck,
  Smartphone,
  Cpu,
  Wifi,
  KeyRound,
  FileSignature,
  FileDigit,
  ArrowRight
} from 'lucide-react';

const SlideWrapper = ({ children, index }: { children: React.ReactNode, index: number }) => (
  <section 
    className="w-full h-full flex-shrink-0 snap-center overflow-y-auto overflow-x-hidden no-scrollbar"
    id={`slide-${index}`}
  >
    <div className="min-h-full w-full flex flex-col justify-center px-6 py-20 pb-32 md:p-16 md:pb-32 lg:p-24 lg:pb-32 relative z-10">
      <div className="w-full max-w-5xl mx-auto flex flex-col">
        {children}
      </div>
    </div>
  </section>
);

const Headings = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-zinc-900 mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-xl md:text-2xl text-zinc-500 font-light"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Card = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="bg-white border border-zinc-200 p-8 rounded-2xl flex flex-col"
  >
    {children}
  </motion.div>
);

const PhishingEmailAnalyzer = () => {
  const [revealed, setRevealed] = useState<string[]>([]);
  
  const toggleReveal = (id: string) => {
    if (revealed.includes(id)) {
      setRevealed(revealed.filter(r => r !== id));
    } else {
      setRevealed([...revealed, id]);
    }
  };

  return (
    <div className="bg-white border text-left border-zinc-200 rounded-xl overflow-hidden text-sm w-full mx-auto max-w-lg shadow-sm">
      <div className="bg-zinc-100 px-4 py-3 border-b flex justify-between items-center text-zinc-500">
        <span className="font-medium">Nuovo Messaggio in Arrivo...</span>
        <span>×</span>
      </div>
      <div className="p-6 space-y-4">
        <div>
          <span className="text-zinc-500 mr-2">Da:</span> 
          <button onClick={() => toggleReveal('sender')} className={`font-mono border px-2 py-1 rounded transition-colors ${revealed.includes('sender') ? 'bg-red-100 border-red-300 text-red-800' : 'bg-red-50/0 hover:bg-zinc-100 border-dashed border-zinc-300'}`}>
            amministrazione@fatture-online-help.com
          </button>
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: revealed.includes('sender') ? 'auto' : 0, opacity: revealed.includes('sender') ? 1 : 0 }} className="text-red-700 text-xs mt-2 overflow-hidden bg-red-50 p-2 rounded">
            <strong>🚩 Mittente falso:</strong> Un fornitore reale userebbe il proprio dominio ufficiale registrato, non domini generici o "help.com".
          </motion.div>
        </div>
        <div>
           <span className="text-zinc-500 mr-2">Oggetto:</span>
           <button onClick={() => toggleReveal('subject')} className={`font-medium border px-2 py-1 rounded transition-colors ${revealed.includes('subject') ? 'bg-red-100 border-red-300 text-red-800' : 'bg-transparent hover:bg-zinc-50 border-dashed border-zinc-300'}`}>
            Sollecito urgente: Sospensione account
           </button>
           <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: revealed.includes('subject') ? 'auto' : 0, opacity: revealed.includes('subject') ? 1 : 0 }} className="text-red-700 text-xs mt-2 overflow-hidden bg-red-50 p-2 rounded">
            <strong>🚩 Senso d'urgenza:</strong> Tecnica psicologica per spaventare la vittima e indurla ad agire d'impulso senza verifiche.
          </motion.div>
        </div>
        <hr className="border-zinc-100 my-4" />
        <div className="text-zinc-700 space-y-4 pt-2">
          <p>Gentile utente,</p>
          <p>A causa di un errore nel rinnovo della sua carta, i nostri servizi verranno <strong>interrotti entro 4 ore</strong>. La preghiamo di aggiornare i suoi dati immediatamente per evitare la disattivazione.</p>
          <div className="mt-4 inline-block">
            <button onClick={() => toggleReveal('link')} className={`text-blue-600 font-medium px-4 py-2 rounded transition-colors ${revealed.includes('link') ? 'bg-red-100 ring-2 ring-red-400 text-red-800' : 'bg-blue-50 hover:bg-blue-100 border border-blue-200'}`}>
              Aggiorna Dati Pagamento
            </button>
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: revealed.includes('link') ? 'auto' : 0, opacity: revealed.includes('link') ? 1 : 0 }} className="text-red-700 text-xs mt-3 overflow-hidden bg-red-50 p-3 rounded border border-red-100">
              <p className="font-mono text-[10px] mb-1 text-zinc-500">Destinazione reale: http://portal-login-check.com/update</p>
              <strong>🚩 Link fraudolento:</strong> Non punta al dominio legittimo, manca HTTPS (solo HTTP) e la pagina di destinazione è un clone perfetto per rubare le credenziali.
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-zinc-800 p-3 text-xs text-zinc-300 text-center font-medium flex items-center justify-center gap-2">
        <EyeOff className="w-4 h-4" /> Clicca sugli elementi tratteggiati per rivelare le vulnerabilità
      </div>
    </div>
  );
};

const RansomwareSimulator = () => {
  const [state, setState] = useState<'idle'|'downloading'|'infected'>('idle');

  return (
    <div className="w-full max-w-lg mx-auto">
      {state === 'idle' && (
        <div className="bg-white border border-zinc-200 rounded-2xl p-10 text-center space-y-6 shadow-sm">
           <div className="w-20 h-20 bg-zinc-100 rounded-full flex items-center justify-center mx-auto">
             <FileDigit className="w-10 h-10 text-zinc-500" />
           </div>
           <div>
             <h4 className="text-xl font-medium">Ricevuto nuovo file:</h4>
             <p className="text-zinc-800 font-mono text-sm mt-2 bg-zinc-100 py-1 px-3 rounded inline-block">
               nota_spese.xlsx<span className="text-red-500 font-bold opacity-30 hover:opacity-100 transition-opacity" title="L'estensione reale .exe è spesso nascosta dal sistema operativo">.exe</span>
             </p>
             <p className="text-xs text-zinc-500 mt-4">Un utente disattento è convinto si tratti di un normale foglio di calcolo Excel.</p>
           </div>
           <button 
             onClick={() => { setState('downloading'); setTimeout(() => setState('infected'), 2000) }}
             className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition-colors"
           >
             Doppio clic sul file per aprirlo
           </button>
        </div>
      )}
      
      {state === 'downloading' && (
         <div className="bg-white border border-zinc-200 rounded-2xl p-10 text-center space-y-6 flex flex-col items-center justify-center min-h-[300px]">
           <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
           <p className="text-zinc-600 font-medium animate-pulse">Apertura Excel in corso...</p>
           <p className="text-xs text-zinc-400">Esecuzione in background silente...</p>
         </div>
      )}

      {state === 'infected' && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} 
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#1a0505] border border-red-900 rounded-2xl p-8 text-center space-y-6 relative overflow-hidden shadow-2xl"
        >
          {/* Scanline effect */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #f00 2px, #f00 4px)' }}></div>
          
          <div className="relative z-10">
            <ShieldAlert className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h4 className="text-2xl md:text-3xl font-mono font-bold text-red-500 mb-2 uppercase tracking-tighter">I tuoi file sono crittografati</h4>
            <div className="bg-black/80 border border-red-900/50 text-red-400 p-5 rounded-lg font-mono text-xs md:text-sm text-left space-y-2 mb-6">
              <p className="text-zinc-500">{"// Attività del malware in background:"}</p>
              <p>{"[OK] Scansione dischi completata"}</p>
              <p className="text-white">{"[>>] Applicata crittografia AES-256 + RSA-4096"}</p>
              <p>{"[!] 4,521 documenti resi inaccessibili"}</p>
              <p>{"[!] Unità di rete M: e Z: infettate"}</p>
            </div>
            <p className="text-zinc-300 text-sm leading-relaxed mb-6">
              I dati della tua azienda non sono più accessibili. <br/>Per ottenere il software di decifratura (Decryptor) è richiesto il pagamento di un riscatto pari a <strong>0.5 Bitcoin</strong>.
            </p>
            <button onClick={() => setState('idle')} className="px-4 py-2 border border-red-900 text-red-500 bg-red-900/20 hover:bg-red-900/40 rounded transition-colors text-xs font-mono">
              [ RIPRISTINA SIMULATORE ]
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
};

const TLSHandshakeInteractive = () => {
  const [step, setStep] = useState(0);

  const steps = [
    { title: "Browser", text: "In attesa di connessione sicura...", align: "center", icon: <Lock className="w-5 h-5 opacity-20" /> },
    { title: "Client Hello", text: "Ciao server, voglio comunicare in modo sicuro. Io supporto TLS 1.3 e queste Cipher Suites.", align: "start", icon: <Smartphone className="w-5 h-5 text-blue-500" /> },
    { title: "Server Hello & Cert", text: "Perfetto, usiamo TLS 1.3. Ecco il mio Certificato Digitale pubblico che attesta chi sono.", align: "end", icon: <Server className="w-5 h-5 text-purple-500" /> },
    { title: "Verifica e Scambio Chiavi", text: "Ho verificato il tuo certificato. Genero un Segreto, lo cripto con la tua chiave pubblica e te lo invio.", align: "start", icon: <KeyRound className="w-5 h-5 text-blue-500" /> },
    { title: "Sessione Cifrata Attiva", text: "Entrambi abbiamo ora la stessa Chiave Simmetrica generata. Tutto il traffico da ora è cifrato!", align: "center", final: true, icon: <ShieldCheck className="w-6 h-6 text-emerald-500" /> }
  ];

  return (
    <div className="bg-white border border-zinc-200 rounded-2xl p-6 mt-6 shadow-sm">
      <div className="flex justify-between items-center mb-6 px-4">
         <div className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${step === 1 || step === 3 ? 'bg-blue-100 text-blue-600 ring-4 ring-blue-50' : 'bg-zinc-100'}`}><Smartphone className="w-6 h-6" /></div>
            <span className="text-xs font-medium text-zinc-500">Client Browser</span>
         </div>
         <div className="flex-1 flex flex-col items-center justify-center relative mx-4">
            <div className="w-full absolute top-1/2 -translate-y-1/2 flex items-center">
              <div className="h-0.5 w-full bg-zinc-200" />
            </div>
            
            {step === 4 && (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="absolute bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-xs font-bold border border-emerald-200 shadow-sm z-10 flex gap-2 items-center">
                <Lock className="w-3 h-3" /> TUNNEL SECURE TLS
              </motion.div>
            )}
         </div>
         <div className="flex flex-col items-center gap-2">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${step === 2 ? 'bg-purple-100 text-purple-600 ring-4 ring-purple-50' : 'bg-zinc-100'}`}><Server className="w-6 h-6" /></div>
            <span className="text-xs font-medium text-zinc-500">Web Server</span>
         </div>
      </div>

      <div className="h-[140px] bg-zinc-50/50 border border-zinc-100 rounded-xl p-4 flex flex-col justify-center relative overflow-hidden text-sm">
         <motion.div
           key={step}
           initial={{ opacity: 0, y: 10 }}
           animate={{ opacity: 1, y: 0 }}
           className={`w-full flex ${steps[step].align === 'start' ? 'justify-start' : steps[step].align === 'end' ? 'justify-end' : 'justify-center'}`}
         >
           <div className={`max-w-[75%] px-4 py-3 bg-white border border-zinc-200 shadow-sm font-medium flex items-start gap-3 rounded-2xl ${steps[step].align === 'start' ? 'rounded-tl-sm' : steps[step].align === 'end' ? 'rounded-tr-sm' : ''} ${step === 4 ? 'border-emerald-200 bg-emerald-50 text-emerald-900' : 'text-zinc-700'}`}>
             <div className="mt-0.5">{steps[step].icon}</div>
             <div className="leading-relaxed">{steps[step].text}</div>
           </div>
         </motion.div>
      </div>

      <div className="flex justify-between items-center mt-6 pt-4 border-t border-zinc-100">
         <button onClick={() => setStep(s => Math.max(0, s - 1))} disabled={step === 0} className="px-4 py-2 text-sm font-medium text-zinc-500 hover:text-zinc-900 disabled:opacity-30 transition-colors">← Indietro</button>
         <div className="flex gap-2">
           {steps.map((_, i) => <div key={i} className={`w-2.5 h-2.5 rounded-full transition-all ${i === step ? 'bg-blue-500 scale-125' : i < step ? 'bg-blue-200' : 'bg-zinc-200'}`} />)}
         </div>
         <button onClick={() => setStep(s => Math.min(steps.length - 1, s + 1))} disabled={step === steps.length - 1} className="px-5 py-2 text-sm font-medium bg-zinc-900 text-white rounded-full hover:bg-zinc-800 disabled:opacity-30 transition-colors">Avanti →</button>
      </div>
    </div>
  )
}

const slides = [
  // 1. Cover
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <div className="flex flex-col items-start max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 bg-zinc-900 rounded-2xl flex items-center justify-center mb-12 shadow-xl"
        >
          <ShieldCheck className="text-white w-10 h-10" />
        </motion.div>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-zinc-900 leading-tight mb-8"
        >
          Compendio di<br />
          <span className="font-medium text-blue-600">Sicurezza Informatica</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-500 max-w-2xl font-light leading-relaxed"
        >
          Analisi approfondita di minacce, vettori d'attacco, protocolli crittografici e infrastrutture di fiducia.
        </motion.p>
      </div>
    </SlideWrapper>
  ),

  // 2. Principali Minacce
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="1. Principali Minacce" subtitle="Phishing e Malware (Definizioni Generali)" />
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <Card delay={0.1}>
          <MailWarning className="w-10 h-10 text-orange-500 mb-6" />
          <h3 className="text-2xl font-medium mb-4">Phishing</h3>
          <p className="text-zinc-600 leading-relaxed">
            Sfrutta prevalentemente le vulnerabilità psicologiche ed emotive dell'essere umano tramite l'ingegneria sociale. L'attaccante maschera la propria identità dietro quella di un'entità fidata.
          </p>
        </Card>
        <Card delay={0.2}>
          <Bug className="w-10 h-10 text-red-500 mb-6" />
          <h3 className="text-2xl font-medium mb-4">Malware</h3>
          <p className="text-zinc-600 leading-relaxed">
            Arma puramente tecnologica progettata per agire sul codice e sui sistemi operativi per infiltrarsi, danneggiare o alterare senza consenso.
          </p>
        </Card>
        <div className="md:col-span-2 mt-4 p-6 bg-zinc-50 border border-zinc-200 rounded-xl">
          <p className="text-zinc-700">
            <strong>🔗 Cyber Kill Chain:</strong> Queste minacce spesso cooperano. Il phishing funge da <em>meccanismo di distribuzione iniziale</em> e il malware agisce da <em>carico utile (payload) distruttivo</em>.
          </p>
        </div>
      </div>
    </SlideWrapper>
  ),

  // 3. Phishing Varianti
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="1.2 Il Fenomeno del Phishing" subtitle="L'inganno tramite l'ingegneria sociale per indurre azioni nocive o rubare dati" />
      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <Card delay={0.1}>
          <h4 className="text-xl font-medium mb-3">Spear Phishing</h4>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Un attacco mirato e personalizzato contro uno specifico individuo o organizzazione. Utilizza informazioni raccolte precedentemente (es. social media) per essere verosimile.
          </p>
        </Card>
        <Card delay={0.2}>
          <h4 className="text-xl font-medium mb-3">Smishing & Vishing</h4>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Varianti dello stesso principio che utilizzano canali differenti: <br/><br/>
            <strong>Smishing:</strong> truffe tramte messaggi SMS.<br/>
            <strong>Vishing:</strong> frodi tramite comunicazioni vocali / telefoniche.
          </p>
        </Card>
        <Card delay={0.3}>
          <h4 className="text-xl font-medium mb-3">Whaling</h4>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Campagne indirizzate a profili di altissimo livello aziendale (CEO, CFO, direttori). L'obiettivo è spesso la frode finanziaria su grande scala o il furto di segreti industriali.
          </p>
        </Card>
      </div>
    </SlideWrapper>
  ),

  // 4. Esempio Phishing
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="Esempio Interattivo: Phishing" subtitle="Simulazione per riconoscere i campanelli d'allarme (Red Flags)" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
        <div>
          <p className="text-zinc-700 leading-relaxed text-lg mb-6">
            L'attaccante ha un unico obiettivo iniziale: <strong>farti cliccare prima che tu possa ragionare</strong>. <br/><br/>
            Guarda questa email che potrebbe arrivare sulla tua casella di posta aziendale. Sembra urgente. Sei in grado di riconoscere i segnali di una trappola?
          </p>
          <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl hidden lg:block">
            <h4 className="font-medium text-blue-900 mb-2">💡 Principi dell'ingegneria sociale:</h4>
            <ul className="text-sm text-blue-800 space-y-2 list-disc pl-4">
               <li>Fingere autorità o creare fiducia (Es. logo del fornitore).</li>
               <li>Stimolare urgenza o paura (Es. interruzione servizio, multe).</li>
               <li>Oscurare la vera destinazione (Link ingannevoli).</li>
            </ul>
          </div>
        </div>
        <PhishingEmailAnalyzer />
      </div>
    </SlideWrapper>
  ),

  // 5. Tassonomia Malware
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="1.3 Tassonomia del Malware" subtitle="Classificazione in base alle modalità di propagazione e scopi" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Card delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <Lock className="text-red-500 w-6 h-6" />
            <h3 className="text-xl font-medium">Ransomware</h3>
          </div>
          <p className="text-zinc-600 text-sm">Cripta in modo inaccessibile i file sul disco della vittima chiedendo un riscatto. Spesso usa "doppia estorsione" (esfiltra i dati e minaccia di pubblicarli).</p>
        </Card>
        <Card delay={0.2}>
          <div className="flex items-center gap-3 mb-4">
            <FileCheck className="text-purple-500 w-6 h-6" />
            <h3 className="text-xl font-medium">Trojan Horse</h3>
          </div>
          <p className="text-zinc-600 text-sm">Sembra un software utile o innocuo, ma nasconde codice malevolo. Installato dall'utente, attiva backdoor per controllo remoto.</p>
        </Card>
        <Card delay={0.3}>
          <div className="flex items-center gap-3 mb-4">
            <EyeOff className="text-zinc-800 w-6 h-6" />
            <h3 className="text-xl font-medium">Spyware & Keylogger</h3>
          </div>
          <p className="text-zinc-600 text-sm">Agiscono in background silente monitorando attività, registrando la tastiera o catturando schermi per sottrarre segreti e credenziali.</p>
        </Card>
        <Card delay={0.4}>
          <div className="flex items-center gap-3 mb-4">
            <Network className="text-emerald-500 w-6 h-6" />
            <h3 className="text-xl font-medium">Worm</h3>
          </div>
          <p className="text-zinc-600 text-sm">Programmi capaci di autoreplicarsi e diffondersi autonomamente in rete sfruttando vulnerabilità software, senza interazione umana.</p>
        </Card>
      </div>
    </SlideWrapper>
  ),

  // 6. Esempio Malware
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="Simulazione Malware" subtitle="Come agisce un Ransomware (LockBit variant) nella vita reale" />
      <div className="mt-8 grid lg:grid-cols-12 gap-8 items-center">
         <div className="lg:col-span-5 space-y-6">
            <div className="px-4 py-2 bg-red-100 text-red-800 rounded-lg text-sm font-bold inline-flex items-center gap-2">
              <Bug className="w-5 h-5" /> PERICOLO
            </div>
            <p className="text-zinc-700 leading-relaxed text-lg">
              L'utente credeva di aprire un normale documento. Il malware invece sfrutta uno stratagemma classico: <strong className="text-zinc-900">le doppie estensioni occultate</strong> dal sistema operativo.
            </p>
            <p className="text-zinc-700 leading-relaxed">
              L'esecuzione è rapida e silenziosa. Quando l'utente se ne accorge leggendo il riscatto sullo schermo, il danno (la completa cifratura del disco) è già avvenuto. 
            </p>
         </div>
         <div className="lg:col-span-7">
           <RansomwareSimulator />
         </div>
      </div>
    </SlideWrapper>
  ),

  // 7. MITM Intro
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="2. Attacchi Man-In-The-Middle" subtitle="(MITM) Definizione Generale e Principi" />
      <div className="mt-12 space-y-8">
        <p className="text-xl text-zinc-700 leading-relaxed">
          Si configura quando un attaccante riesce a interporti segretamente tra due parti in comunicazione legittima (es: browser e web server). Intercetta, legge o altera i dati. Le parti legittime credono di comunicare in modo diretto.
        </p>
        <div className="bg-blue-50 border border-blue-200 p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10"><ShieldAlert className="w-32 h-32 text-blue-900" /></div>
          <h3 className="text-xl font-medium text-blue-900 mb-4 inline-flex items-center gap-2">
            Nota Tecnica: Intercettazione vs Alterazione
          </h3>
          <p className="text-blue-800 leading-relaxed">
            Non è solo ascolto passivo <em>(eavesdropping)</em>. Senza crittografia, l'attaccante ha il <strong>controllo bidirezionale</strong>: può modificare i dati "al volo", ad esempio alterando in modo invisibile un codice IBAN all'interno di una richiesta HTTP verso la banca.
          </p>
        </div>
      </div>
    </SlideWrapper>
  ),

  // 8. MITM Vettori
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="2.2 Vettori e Tecniche MITM" subtitle="Come gli attaccanti manipolano l'architettura di rete non protetta" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card>
          <Network className="text-blue-500 w-8 h-8 mb-4" />
          <h3 className="text-lg font-medium mb-3">ARP Spoofing (Poisoning)</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Agisce a livello Data Link in una LAN. L'attaccante invia messaggi ARP falsi legando il suo MAC address al gateway/router legittimo. Tutto il traffico internet della vittima passa per il computer ostile.
          </p>
        </Card>
        <Card>
          <Server className="text-purple-500 w-8 h-8 mb-4" />
          <h3 className="text-lg font-medium mb-3">DNS Spoofing (Cache)</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Altera i record DNS inserendo info false. Una chiamata legittima a un URL dirotta l'utente sull'indirizzo IP di un server malevolo che ospita un sito clone perfetto.
          </p>
        </Card>
        <Card>
          <Wifi className="text-orange-500 w-8 h-8 mb-4" />
          <h3 className="text-lg font-medium mb-3">Rogue Wi-Fi (Evil Twin)</h3>
          <p className="text-zinc-600 text-sm leading-relaxed">
            Creazione di un hotspot pubblico finto (es. <em>"Aeroporto_Free_WiFi"</em>) identico a quello legittimo. I dispositivi si autoconnettono esponendo traffico non cifrato.
          </p>
        </Card>
      </div>
    </SlideWrapper>
  ),

  // 9. Esempio MITM
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="Esempio Pratico: Wi-Fi Pubblico" subtitle="Traffico in chiaro e furto di sessione" />
      <Card>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              <Wifi className="w-4 h-4" /> "Bar_Centrale" Network
            </div>
            <p className="text-zinc-700 leading-relaxed">
              Un professionista in un bar accede al pannello del sito aziendale (tramite vecchio protocollo non sicuro HTTP).
            </p>
            <p className="text-zinc-700 leading-relaxed">
              Nello stesso momento, un attaccante è connesso con software di sniffing (Wireshark) e forza il transito del traffico tramite ARP Spoofing.
            </p>
          </div>
          <div className="bg-zinc-900 rounded-xl p-6 text-emerald-400 font-mono text-sm leading-relaxed shadow-lg">
            <p className="text-zinc-500 mb-2">// Intercettazione Pacchetto POST</p>
            <p>POST /login.php HTTP/1.1</p>
            <p>Host: gestione-aziendale.com</p>
            <br />
            <p className="text-red-400 bg-red-400/10 p-2 rounded">
              user=admin&pass=Segreta2026
            </p>
            <p className="text-zinc-500 mt-4">// Parametri letti in chiaro: l'attaccante ha il controllo del portale.</p>
          </div>
        </div>
      </Card>
    </SlideWrapper>
  ),

  // 10. HTTPS intro
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="3. Il Protocollo HTTPS" subtitle="L'infrastruttura difensiva (Hypertext Transfer Protocol Secure)" />
      <div className="mb-10 text-xl font-light text-zinc-700">
        Evoluzione dell'HTTP. Inserisce tra HTTP e TCP un protocollo crittografico: il <strong>TLS (Transport Layer Security)</strong>, noto storicamente come SSL. L'obiettivo primario è neutralizzare gli attacchi MITM.
      </div>
      <div className="bg-white border text-zinc-800 border-zinc-200 rounded-2xl p-8">
        <h3 className="text-xl font-medium mb-6">I Tre Pilastri della Sicurezza TLS:</h3>
        <ul className="space-y-6">
           <li className="flex gap-4 items-start">
             <div className="bg-blue-100 p-2 rounded-lg mt-1"><Lock className="w-5 h-5 text-blue-600" /></div>
             <div>
               <h4 className="font-medium">1. Riservatezza (Confidentiality)</h4>
               <p className="text-zinc-600 mt-1 text-sm">Dati cifrati con algoritmi avanzati. Chi intercetta i pacchetti di rete vedrà solo sequenze di bit pseudocasuali, prive di significato intelligibile.</p>
             </div>
           </li>
           <li className="flex gap-4 items-start">
             <div className="bg-emerald-100 p-2 rounded-lg mt-1"><ShieldCheck className="w-5 h-5 text-emerald-600" /></div>
             <div>
               <h4 className="font-medium">2. Integrità dei Dati (Integrity)</h4>
               <p className="text-zinc-600 mt-1 text-sm">Tramite meccanismi di hashing HMAC, garantisce che i dati non vengano manipolati in transito. Anche la modifica di un singolo bit viene rilevata, interrompendo la connessione.</p>
             </div>
           </li>
           <li className="flex gap-4 items-start">
             <div className="bg-purple-100 p-2 rounded-lg mt-1"><KeyRound className="w-5 h-5 text-purple-600" /></div>
             <div>
               <h4 className="font-medium">3. Autenticazione (Authentication)</h4>
               <p className="text-zinc-600 mt-1 text-sm">Esclude i domini fraudolenti (phishing) permettendo all'utente di verificare criptograficamente la reale identità del server web.</p>
             </div>
           </li>
        </ul>
      </div>
    </SlideWrapper>
  ),

  // 11. Handshake TLS
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="3.3 Handshake TLS" subtitle="Il processo di negoziazione della sicurezza (Passo-passo interattivo)" />
      <div className="mt-4 text-lg text-zinc-700 leading-relaxed max-w-4xl">
        Prima dell'invio dei dati veri e propri (es. la pagina HTML web), browser e server devono stabilire le regole del gioco. Come si scambiano in modo sicuro le chiavi crittografiche simmetriche da usare per il traffico veloce?
      </div>
      
      <TLSHandshakeInteractive />
      
    </SlideWrapper>
  ),

  // 12. Tabella HTTP vs HTTPS
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="3.4 Tabella Comparativa" subtitle="HTTP (Plain text) vs HTTPS (Secure)" />
      <div className="rounded-2xl border border-zinc-200 overflow-hidden mt-8 text-sm md:text-base">
        <div className="grid grid-cols-3 bg-zinc-100 border-b border-zinc-200 font-medium text-zinc-800">
          <div className="p-4 md:p-6 border-r border-zinc-200">Caratteristica</div>
          <div className="p-4 md:p-6 border-r border-zinc-200">HTTP <span className="font-normal text-zinc-500">(Hypertext Transfer)</span></div>
          <div className="p-4 md:p-6 text-emerald-700">HTTPS <span className="font-normal text-emerald-600">(Secure)</span></div>
        </div>
        {[
          ["Porta di Rete Standard", "Porta TCP 80", "Porta TCP 443"],
          ["Stato del Traffico", "Testo in chiaro (Plain Text). Intercettabile direttamente.", "Interamente cifrato. Incomprensibile agli estranei."],
          ["Protezione MITM", "Nessuna protezione. Vulnerabile ad alterazioni e spoofing.", "Altamente protetto. Rileva manomissioni e reindirizzamenti."],
          ["Requisiti Infrastruttura", "Nessuno. Richiede solo un web server attivo.", "Richiede l'acquisto/installazione di un Certificato SSL/TLS valido."]
        ].map((row, i) => (
          <div key={i} className="grid grid-cols-3 bg-white border-b last:border-0 border-zinc-100 text-zinc-600 hover:bg-zinc-50 transition-colors">
            <div className="p-4 md:p-6 border-r border-zinc-100 font-medium text-zinc-800 flex items-center">{row[0]}</div>
            <div className="p-4 md:p-6 border-r border-zinc-100 flex items-center bg-red-50/30 text-red-900/80">{row[1]}</div>
            <div className="p-4 md:p-6 bg-emerald-50/50 text-emerald-900 flex items-center">{row[2]}</div>
          </div>
        ))}
      </div>
    </SlideWrapper>
  ),

  // 13. CA e Certificati
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="4. Certificati Digitali e CA" subtitle="Public Key Infrastructure (PKI)" />
      <div className="mt-8 space-y-8">
        <p className="text-xl text-zinc-700 leading-relaxed border-l-4 border-blue-500 pl-6">
          La PKI è l'ecosistema che risolve il problema della fiducia. Se la crittografia vela il messaggio, i <strong>Certificati Digitali</strong> e le <strong>Certificate Authority (CA)</strong> garantiscono indissolubilmente l'identità del proprietario del dominio nel web, equiparando l'entità online a un documento d'identità ufficiale.
        </p>
        
        <Card>
          <div className="flex items-center gap-3 mb-6">
             <FileSignature className="w-8 h-8 text-zinc-800" />
             <h3 className="text-xl font-medium">Anatomia standard X.509</h3>
          </div>
          <div className="space-y-4">
             {[
               ["Nome Soggetto", "Identifica il dominio web (es. www.google.com) o ragione sociale."],
               ["Chiave Pubblica", "La componente matematica che i client usano per avviare connessione sicura."],
               ["Emittente (Issuer)", "La Certificate Authority che ha verificato le informazioni."],
               ["Periodo Validità", "Le date temporali di validità esatta."],
               ["Firma Digitale CA", "L'impronta crittografica generata dalla chiave privata della CA x sigillare l'integrità."]
             ].map((f, i) => (
               <div key={i} className="flex gap-4">
                 <div className="w-32 flex-shrink-0 font-medium text-sm text-zinc-900">{f[0]}</div>
                 <div className="text-sm text-zinc-600">{f[1]}</div>
               </div>
             ))}
          </div>
        </Card>
      </div>
    </SlideWrapper>
  ),

  // 14. Catena di Fiducia e Flusso
  (idx: number) => (
    <SlideWrapper index={idx} key={idx}>
      <Headings title="4.3 La Catena di Fiducia" subtitle="Come il Browser decide se mostrare il lucchetto verde" />
      <div className="grid md:grid-cols-2 gap-12 mt-8 items-start">
        <div className="space-y-6">
          <h3 className="text-xl font-medium">Struttura Gerarchica</h3>
          <div className="space-y-4 border-l border-zinc-200 pl-6 relative">
             <div className="absolute top-4 -left-[9px] w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-sm" />
             <div className="absolute top-24 -left-[9px] w-4 h-4 rounded-full bg-zinc-300 border-4 border-white shadow-sm" />
             <div className="absolute top-44 -left-[9px] w-4 h-4 rounded-full bg-emerald-500 border-4 border-white shadow-sm" />
             
             <div className="h-16 flex flex-col justify-center">
                <p className="font-semibold text-blue-600">1. Root CA (Apicale)</p>
                <p className="text-sm text-zinc-500">Auto-firmato, protetto offline e blindato in browser/OS nativamente.</p>
             </div>
             <div className="h-16 flex flex-col justify-center">
                <p className="font-medium text-zinc-800">2. Subordinate / Intermediate CA</p>
                <p className="text-sm text-zinc-500">Firmata dalla Root. Emette certificati leggeri quotidiani commerciali.</p>
             </div>
             <div className="h-16 flex flex-col justify-center">
                <p className="font-medium text-emerald-600">3. End-Entity / Leaf Certificate</p>
                <p className="text-sm text-zinc-500">Installato nel server web sito finale (es. example.com).</p>
             </div>
          </div>
        </div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8">
           <h3 className="text-lg font-medium mb-4 flex items-center gap-2"><Smartphone className="w-5 h-5"/> Flusso di Convalida Base:</h3>
           <ol className="list-decimal pl-5 space-y-3 text-sm text-zinc-600">
              <li>Naviga su <em>esempio-banca.it</em>: riceve il <b>Certificato Foglia</b>. Non è nativamente fidato.</li>
              <li>Browser nota che la firma è della "CA Intermedia XYZ". Chiede il certificato intermedio.</li>
              <li>A sua volta la CA Intermedia è firmata dalla <b>Root Authority Corp</b>.</li>
              <li>La <b>Root Authority Corp</b> è presente nel Database nativo del browser. Valida! Le date e domini combaciano. Attiva lucchetto HTTPS e chiave di sessione.</li>
           </ol>
        </div>
      </div>
    </SlideWrapper>
  )
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingManually = useRef(false);

  const snapToSlide = (index: number) => {
    const container = containerRef.current;
    if (!container) return;
    
    isScrollingManually.current = true;
    const width = container.offsetWidth;
    
    container.scrollTo({
      left: index * width,
      behavior: 'smooth'
    });
    
    setActiveSlide(index);
    
    // Clear the manual scroll flag after animation completes
    setTimeout(() => {
      isScrollingManually.current = false;
    }, 700);
  };

  const nextSlide = () => {
    if (activeSlide < slides.length - 1) {
      snapToSlide(activeSlide + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      snapToSlide(activeSlide - 1);
    }
  };

  // Monitor scroll to update activeSlide index
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleScroll = () => {
      if (isScrollingManually.current) return;
      const width = container.offsetWidth;
      if (width === 0) return;
      const index = Math.round(container.scrollLeft / width);
      if (index !== activeSlide) {
        setActiveSlide(index);
      }
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => container.removeEventListener('scroll', handleScroll);
  }, [activeSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      }
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [activeSlide]); // Add dependency so nextSlide uses fresh state

  return (
    <div className="fixed inset-0 bg-[#FAFAFA] font-sans text-zinc-900 overflow-hidden flex flex-col selection:bg-blue-200">
      
      {/* Horizontal Scroll Area */}
      <div 
        ref={containerRef}
        className="flex w-full h-full overflow-x-auto snap-x snap-mandatory no-scrollbar"
      >
        {slides.map((renderSlide, idx) => (
          <div key={idx} className="w-full h-full flex-shrink-0 snap-center">
            {renderSlide(idx)}
          </div>
        ))}
      </div>

      {/* Presentation HUD fixed bottom */}
      <div className="fixed bottom-0 inset-x-0 h-24 flex items-center justify-between px-8 md:px-12 pointer-events-none z-[100]">
         <div className="flex gap-2 pointer-events-auto">
             {slides.map((_, i) => (
                <button
                  key={i}
                  title={`Slide ${i + 1}`}
                  onClick={() => snapToSlide(i)}
                  className={`h-2 transition-all rounded-full p-0 cursor-pointer ${i === activeSlide ? 'w-8 bg-zinc-800' : 'w-2 bg-zinc-300 hover:bg-zinc-400'}`}
                />
             ))}
         </div>
         
         <div className="flex gap-4 pointer-events-auto">
           <button 
             onClick={prevSlide}
             disabled={activeSlide === 0}
             aria-label="Slide precedente"
             className="w-12 h-12 flex items-center justify-center rounded-full bg-white border border-zinc-200 text-zinc-900 disabled:opacity-20 hover:bg-zinc-50 active:scale-95 transition-all shadow-md cursor-pointer disabled:cursor-default"
           >
             <ArrowRight className="w-5 h-5 rotate-180" />
           </button>
           <button 
             onClick={nextSlide}
             disabled={activeSlide === slides.length - 1}
             aria-label="Prossima slide"
             className="w-12 h-12 flex items-center justify-center rounded-full bg-zinc-900 text-white disabled:opacity-20 hover:bg-zinc-800 active:scale-95 transition-all shadow-md cursor-pointer disabled:cursor-default"
           >
             <ArrowRight className="w-5 h-5" />
           </button>
         </div>
      </div>
    </div>
  );
}

