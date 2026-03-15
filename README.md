# Discord Bot — Estilo AtlasBot (Completo)

Bot completo em discord.js v14 com todas as funcionalidades do AtlasBot.

## Instalação rápida

1. Crie o bot em discord.com/developers/applications
2. Ative Server Members Intent e Message Content Intent
3. npm install
4. cp .env.example .env  (cole seu token)
5. Instale o FFmpeg (obrigatório para música)
6. npm start

## Comandos

### Moderação
!ban @user [motivo]           — Bane
!unban <userId> [motivo]      — Desbane
!kick @user [motivo]          — Expulsa
!mute @user [10m/1h] [motivo] — Muta (timeout)
!unmute @user                 — Desmuta
!clear [1-100]                — Apaga mensagens
!lock [#canal] [motivo]       — Bloqueia canal
!unlock [#canal]              — Desbloqueia canal
!antilink on/off              — Bloqueia links automaticamente
!antispam on/off [limite]     — Anti-spam automático
!dm @user <mensagem>          — Envia DM pelo bot
!say [#canal] <mensagem>      — Bot envia mensagem

### Advertências
!warn @user [motivo]          — Aplica warn (3=mute, 5=ban auto)
!warn list @user              — Lista warns
!warn clear @user             — Limpa warns
!warn remove @user <n>        — Remove warn específico

### Música
!play <nome ou URL>           — Toca do YouTube
!skip / !stop / !queue
!pause / !resume

### Tickets
!ticket setup [#canal] [@cargo] — Cria painel com botão
!ticket close                   — Fecha ticket
!ticket add/remove @user        — Gerencia acesso

### Reaction Roles
!rr add <msgId> <emoji> @cargo
!rr remove <msgId> <emoji>
!rr list

### Verificação
!verify setup #canal @cargo   — Cria painel de verificação
!verify off

### Boas-vindas / Saída
!welcome set #canal [msg]     — Variáveis: {user} {username} {server} {count}
!welcome off
!leave set #canal [msg]
!leave off

### Sugestões
!suggest setup #canal
!suggest <texto>              — Envia sugestão (qualquer membro)
!suggest accept <msgId>
!suggest reject <msgId>

### Avaliação de Staff
!avaliacao setup #canal
!avaliacao @staff <1-5> <comentário>

### Autorole
!autorole set @cargo          — Cargo automático para novos membros
!autorole off

### Logs
!logs set #canal              — Registra: bans, kicks, msgs apagadas/editadas,
!logs off                       voz, tickets, anti-spam, anti-link, warns

### Sorteios
!giveaway start <tempo> <prêmio>   — Ex: !giveaway start 1h iPhone 15
!giveaway end <msgId>
!giveaway reroll <msgId>
