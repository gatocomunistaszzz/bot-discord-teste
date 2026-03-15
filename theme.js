// ═══════════════════════════════════════════════════
//   MYTHARA SURVIVAL — Tema RPG Fantasy / Hytale
// ═══════════════════════════════════════════════════

module.exports = {
  // Cores temáticas
  colors: {
    primary:  '#8B0000',   // vermelho sangue — cor principal
    gold:     '#C8961E',   // dourado épico
    purple:   '#6B2FA0',   // roxo arcano
    dark:     '#1A0A2E',   // fundo masmorras
    success:  '#2ECC71',   // verde floresta
    danger:   '#E74C3C',   // vermelho perigo
    ice:      '#A8D8EA',   // azul gelo
    fire:     '#FF6B35',   // laranja fogo
  },

  // Nome e identidade
  name: 'Mythara Survival',
  prefix: '!',
  footer: 'Mythara Survival ⚔️ Entre na aventura',
  iconUrl: null, // preenchido dinamicamente com o ícone do servidor

  // Emojis temáticos
  emoji: {
    sword:    '⚔️',
    shield:   '🛡️',
    crown:    '👑',
    scroll:   '📜',
    gem:      '💎',
    fire:     '🔥',
    skull:    '💀',
    dragon:   '🐉',
    magic:    '✨',
    potion:   '🧪',
    map:      '🗺️',
    guild:    '🏰',
    rune:     '🔮',
    arrow:    '➤',
  },

  // Textos dos painéis
  panels: {

    // ── BOAS-VINDAS ──────────────────────────────────
    welcome: {
      title: '⚔️ Um Novo Aventureiro Chegou!',
      description: (member, guild, count) =>
        `> *"As runas antigas se iluminam... um novo destino começa."*\n\n` +
        `Bem-vindo(a) às terras de **${guild}**, ${member}!\n\n` +
        `🗺️ Você é o **${count}º aventureiro** a se juntar à nossa guilda.\n` +
        `📜 Leia as **regras** antes de partir para sua jornada.\n` +
        `✅ Verifique-se para liberar o acesso completo ao reino.`,
      color: '#C8961E',
      footer: 'Mythara Survival ⚔️ Que sua jornada seja épica!',
    },

    // ── SAÍDA ─────────────────────────────────────────
    leave: {
      title: '🌑 Um Aventureiro Partiu...',
      description: (username, guild) =>
        `> *"O vento carrega o eco de seus passos para longe..."*\n\n` +
        `**${username}** abandonou as terras de **${guild}**.\n` +
        `Que os deuses guiem seu caminho, onde quer que vá.`,
      color: '#6B2FA0',
      footer: 'Mythara Survival ⚔️ Até breve, aventureiro.',
    },

    // ── VERIFICAÇÃO ───────────────────────────────────
    verify: {
      title: '🔮 ⟨ PORTAL DE ENTRADA — MYTHARA ⟩',
      description:
        `> *"Apenas os verdadeiros aventureiros podem cruzar este portal..."*\n\n` +
        `**⚔️ Bem-vindo às Terras de Mythara!**\n\n` +
        `Para adentrar o reino e iniciar sua jornada, você deve provar seu valor.\n\n` +
        `📜 **Antes de prosseguir:**\n` +
        `・Leia as regras do servidor\n` +
        `・Aceite os termos da Guilda\n` +
        `・Clique em **Jurar Lealdade** para entrar\n\n` +
        `*Ao se verificar, você concorda com as leis do reino de Mythara.*`,
      buttonLabel: '⚔️ Jurar Lealdade',
      color: '#8B0000',
      footer: 'Mythara Survival ⚔️ O destino aguarda...',
    },

    // ── TICKETS ───────────────────────────────────────
    ticket: {
      title: '📜 ⟨ CONSELHO DA GUILDA — SUPORTE ⟩',
      description:
        `> *"A Guilda está aqui para servir seus membros..."*\n\n` +
        `**🏰 Precisa de auxílio, aventureiro?**\n\n` +
        `Nossa equipe de conselheiros está pronta para te ajudar.\n\n` +
        `📋 **Como funciona:**\n` +
        `・Selecione a categoria do seu pedido abaixo\n` +
        `・Um canal privado será criado para você\n` +
        `・Um conselheiro irá te atender em breve\n\n` +
        `⚠️ *Não abuse do sistema. Pedidos falsos serão punidos.*`,
      placeholder: '📂 Selecione o tipo de auxílio...',
      categories: [
        { label: '⚔️ Suporte Geral', value: 'geral', description: 'Dúvidas e problemas gerais do reino' },
        { label: '🐉 Denúncia de Invasor', value: 'denuncia', description: 'Reporte comportamentos inadequados' },
        { label: '💎 Doações e Rank VIP', value: 'compras', description: 'Problemas com doações ou privilégios' },
        { label: '🧪 Reporte de Feitiço Bugado', value: 'bug', description: 'Encontrou um bug? Reporte aqui' },
        { label: '📜 Recurso / Apelação', value: 'recurso', description: 'Recorra de punições ou decisões da staff' },
        { label: '🏰 Outros Assuntos', value: 'outros', description: 'Qualquer outro pedido ao conselho' },
      ],
      color: '#8B0000',
      footer: 'Mythara Survival ⚔️ O Conselho da Guilda',
    },

    // ── DENTRO DO TICKET ──────────────────────────────
    ticketOpen: {
      title: (category) => `📜 Pedido ao Conselho — ${category}`,
      description: (member, category) =>
        `> *"O conselho recebe seu pedido com honra..."*\n\n` +
        `Saudações, ${member}! Seu pedido foi registrado.\n\n` +
        `**📂 Categoria:** ${category}\n` +
        `**🕐 Registrado:** <t:${Math.floor(Date.now() / 1000)}:F>\n\n` +
        `Descreva sua situação com o máximo de **detalhes**.\n` +
        `Um conselheiro irá te atender em breve. ⚔️`,
      footer: 'Mythara Survival ⚔️ Conselho da Guilda',
    },

    // ── SUGESTÕES ─────────────────────────────────────
    suggest: {
      panelTitle: '💡 ⟨ TÁBUA DE IDEIAS DA GUILDA ⟩',
      panelDescription:
        `> *"Grandes reinos são construídos com grandes ideias..."*\n\n` +
        `**Tem uma sugestão para melhorar Mythara?**\n\n` +
        `Use \`!suggest <sua ideia>\` em qualquer canal\n` +
        `e vote nas sugestões dos outros aventureiros!\n\n` +
        `👍 **Aprova** ou 👎 **Reprova** — sua voz importa!`,
      submitTitle: '💡 Nova Proposta ao Conselho',
      footer: 'Mythara Survival ⚔️ Tábua de Ideias',
      color: '#C8961E',
    },

    // ── SORTEIOS ──────────────────────────────────────
    giveaway: {
      title: '🎉 ⟨ TORNEIO DA GUILDA ⟩',
      description: (prize, endsAt, duration) =>
        `> *"O destino favorece os corajosos..."*\n\n` +
        `**🏆 Prêmio:** ${prize}\n\n` +
        `Reaja com 🎉 para participar do torneio!\n\n` +
        `**⏳ Encerra:** <t:${Math.floor(endsAt / 1000)}:R>\n` +
        `**⌛ Duração:** ${duration}`,
      endTitle: '🏆 Torneio Encerrado!',
      footer: 'Mythara Survival ⚔️ Que os deuses decidam!',
      color: '#C8961E',
    },

    // ── LOGS ──────────────────────────────────────────
    logs: {
      ban:        { title: '⚔️ Aventureiro Banido do Reino',   color: '#E74C3C' },
      unban:      { title: '🕊️ Banimento Revogado',             color: '#2ECC71' },
      kick:       { title: '👢 Aventureiro Expulso',            color: '#E67E22' },
      mute:       { title: '🔇 Silêncio Imposto',               color: '#F1C40F' },
      warn:       { title: '⚠️ Advertência Registrada',         color: '#F39C12' },
      msgDelete:  { title: '🗑️ Mensagem Destruída',             color: '#E74C3C' },
      msgEdit:    { title: '✏️ Pergaminho Alterado',             color: '#E67E22' },
      voiceJoin:  { title: '🔊 Entrou na Taverna',              color: '#2ECC71' },
      voiceLeave: { title: '🔇 Saiu da Taverna',                color: '#E74C3C' },
      voiceMove:  { title: '🔀 Mudou de Taverna',               color: '#E67E22' },
      ticketOpen: { title: '📜 Novo Pedido ao Conselho',        color: '#8B0000' },
      ticketClose:{ title: '🔒 Pedido Encerrado',               color: '#E74C3C' },
      spam:       { title: '🚫 Feitiço de Spam Bloqueado',      color: '#E74C3C' },
      link:       { title: '🔗 Portal Proibido Bloqueado',      color: '#E74C3C' },
      join:       { title: '📥 Aventureiro Chegou ao Reino',    color: '#2ECC71' },
      leave:      { title: '📤 Aventureiro Abandonou o Reino',  color: '#E74C3C' },
    },
  },

  // Mensagens de erro/sucesso temáticas
  messages: {
    noPermission:   '❌ Você não possui poderes suficientes para usar este feitiço!',
    noVoiceChannel: '❌ Você precisa estar em uma taverna (canal de voz) primeiro!',
    noMusic:        '❌ Não há melodias ecoando no reino no momento.',
    invalidUser:    '❌ Aventureiro não encontrado nos registros do reino.',
    notInTicket:    '❌ Este feitiço só funciona dentro de um pedido ao Conselho.',
    ticketExists:   (ch) => `❌ Você já possui um pedido aberto: ${ch}`,
    dmClosed:       '❌ Não foi possível enviar um pergaminho ao aventureiro (DMs fechadas).',
    botSuccess:     (text) => `✅ ${text}`,
  },
};
