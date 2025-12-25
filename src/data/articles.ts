export interface Article {
  slug: string;
  title: {
    en: string;
    ru: string;
  };
  description: {
    en: string;
    ru: string;
  };
  content: {
    en: string;
    ru: string;
  };
  isAd?: boolean;
}

export const articles: Article[] = [
  {
    slug: 'why-nodepay',
    title: {
      en: 'Why Nodepay?',
      ru: 'Почему именно Nodepay?'
    },
    description: {
      en: 'Making crypto projects simple for everyone',
      ru: 'Делаем крипто-проекты понятными для всех'
    },
    content: {
      en: `<p>Crypto projects like Nodepay are often too complex for newcomers. Multiple technical terms, documentation in English, unclear network mechanics.</p>

<p>We created this resource to explain in simple terms how Nodepay works, what you need to do to participate, and what pitfalls you might encounter. Our goal is to make earning from this project understandable for everyone.</p>

<h2>What we do</h2>

<p>We translate complexity into simplicity. We break down project updates, explain new features, and answer frequently asked questions. We help community members understand technical aspects and avoid common mistakes.</p>

<p>We monitor Nodepay's official channels, analyze changes, and share up-to-date information in a convenient format. No spam — only useful content.</p>`,
      ru: `<p>Подобные крипто проекты часто оказываются слишком сложными для новичков. Nodepay — не исключение. Множество терминов, техническая документация на английском, непонятные механики работы сети.</p>

<p>Мы создали этот ресурс, чтобы простым языком объяснить, как работает Nodepay, что нужно делать для участия и какие подводные камни могут встретиться. Наша цель — сделать заработок на этом проекте понятным для всех.</p>

<h2>Что мы делаем</h2>

<p>Переводим сложное в простое. Разбираем обновления проекта, объясняем новые функции, отвечаем на частые вопросы. Помогаем участникам сообщества разобраться с техническими аспектами и избежать распространенных ошибок.</p>

<p>Мониторим официальные каналы Nodepay, анализируем изменения и делимся актуальной информацией в удобном формате. Никакого спама — только полезный контент.</p>`
    }
  },
  {
    slug: 'quick-start',
    title: {
      en: 'Quick Start: How to Start Earning',
      ru: 'Как начать зарабатывать: быстрый старт'
    },
    description: {
      en: 'Step-by-step guide for beginners',
      ru: 'Пошаговая инструкция для новичков'
    },
    content: {
      en: `<p>Starting with Nodepay is simple. Follow these steps to begin earning:</p>

<h2>Step 1: Register</h2>
<p><a href="https://beta.nodepay.ai/ref/0wpyjyndpdog4me" target="_blank" rel="noreferrer">Go to the registration page</a> and create your account.</p>

<h2>Step 2: Log in and verify your email</h2>
<p>Choose your preferred login method and confirm your email address.</p>

<h2>Step 3: Connect your crypto wallet</h2>
<p>We recommend using a reliable wallet (for example, Phantom). For better security, consider creating a separate new wallet just for Nodepay.</p>

<h2>Step 4: Answer daily questions</h2>
<p>Go to the Contribute tab, click "Get Started" and answer 5 short questions about cryptocurrency. Important: there are no right or wrong answers — this is a survey. You earn points for activity.</p>

<h2>Step 5: Vote for community questions</h2>
<p>In the Community tab, vote for questions created by other users. By voting, you promote the question; developers might add it to the main 5 questions of the day, and you also earn points for this. Usually, you have about 3 votes per day.</p>

<h2>Step 6: Create your own questions</h2>
<p>In the Create tab, you can submit your own questions. If your question makes it to the top-5 questions of the day, you'll earn points.</p>

<h2>Step 7: Get your tokens</h2>
<p>Your points are converted into $NC tokens over time (displayed in your account). Tokens are credited to your connected wallet. <a href="https://t.me/nodepaynews" target="_blank" rel="noreferrer">Follow news in our Telegram channel</a> to stay updated. You can exchange tokens for real money on crypto exchanges.</p>

<h2>When was the listing?</h2>
<p>$NC was listed on January 17, 2025. That means you can exchange tokens once they arrive in your wallet.</p>

<h2>Don't be afraid to start</h2>
<p>Any activity earns you points. It might seem complicated at first, but once you start clicking around and trying things, you'll figure it out quickly. You're getting paid for answers and activity. And in <a href="https://t.me/nodepaynews" target="_blank" rel="noreferrer">our Telegram channel</a>, you can easily learn more and ask questions.</p>`,
      ru: `<p>Начать работу с Nodepay очень просто. Следуйте этим шагам, чтобы начать зарабатывать:</p>

<h2>Шаг 1: Регистрация</h2>
<p><a href="https://beta.nodepay.ai/ref/0wpyjyndpdog4me" target="_blank" rel="noreferrer">Перейдите по ссылке</a> и зарегистрируйтесь.</p>

<h2>Шаг 2: Войдите и подтвердите почту</h2>
<p>Войдите удобным способом и подтвердите свой email.</p>

<h2>Шаг 3: Привяжите криптокошелёк</h2>
<p>Рекомендуем использовать надёжный кошелёк (например, Phantom). Для безопасности можно создать отдельный новый кошелёк специально для Nodepay.</p>

<h2>Шаг 4: Отвечайте на вопросы каждый день</h2>
<p>Во вкладке Contribute каждый день нажимайте "Get Started" и отвечайте на 5 коротких вопросов про криптовалюту. Важно: нет правильных ответов — это опрос. За активность начисляются баллы.</p>

<h2>Шаг 5: Голосуйте за вопросы сообщества</h2>
<p>Во вкладке Community голосуйте за вопросы, которые создали другие люди. Голосованием вы продвигаете вопрос; возможно разработчики добавят его в основные 5 вопросов дня, и за это тоже начисляются баллы. Обычно доступно около 3 голосов в день.</p>

<h2>Шаг 6: Создавайте свои вопросы</h2>
<p>Во вкладке Create можно создавать свои вопросы. Возможно именно ваш вопрос попадёт в топ-5 вопросов дня, и вы получите баллы.</p>

<h2>Шаг 7: Получайте токены</h2>
<p>Ваши баллы со временем конвертируются в токены $NC (это отображается в аккаунте). Токены начисляются на привязанный кошелёк. <a href="https://t.me/nodepaynews" target="_blank" rel="noreferrer">Следите за новостями в нашем Telegram-канале</a>, чтобы ничего не пропустить. Токены можно обменивать на реальные деньги на крипто-биржах и обменниках.</p>

<h2>Когда был листинг?</h2>
<p>Листинг токена $NC состоялся 17 января 2025 года. Поэтому сразу при начислении их на ваш кошелек вы сможете их обменивать на реальные деньги.</p>

<h2>Не бойтесь начать</h2>
<p>Любая активность даёт баллы. С виду кажется сложным, но если начать "тыкать и пробовать", вы быстро разберётесь. Вам платят за ответы и активность. И именно в <a href="https://t.me/nodepaynews" target="_blank" rel="noreferrer">нашем Telegram-канале</a> можно легко вникнуть и задать вопросы.</p>`
    }
  },
  {
    slug: 'project-history',
    title: {
      en: 'Project History',
      ru: 'История проекта'
    },
    description: {
      en: 'From browser extension to real platform',
      ru: 'От расширения браузера до реальной платформы'
    },
    content: {
      en: `<p>Nodepay is one of the largest projects in the DePIN space (install software and earn money) that has evolved into a full platform with real payouts. Previously, people could simply download a browser extension and earn money.</p>

<p>Before, Nodepay was just a browser extension — you installed it in your browser, left your computer on, and the project paid you tokens because your device helped the network. For the first airdrop in this direction, people received about $60. This was one of the most generous airdrops in the history of such projects, and everyone who participated got paid.</p>

<h2>The new direction</h2>

<p>Now Nodepay has an even better new direction: answering questions about crypto and the market every day. You answer — you get points, which can later be exchanged for $NC tokens.</p>

<p>Regular users have already earned over $100 through several seasons of participation in the project, simply by opening their browser and answering short questions.</p>

<h2>Backing and support</h2>

<p>Nodepay is supported by major partners and funds: OKX Ventures, MEXC, LD Capital, Mirana Ventures, and others. The project has been building since 2021 and has already paid out millions of tokens to users worldwide.</p>

<p>The $NC token has been trading since January 17, 2025, and is already available on major exchanges.</p>

<h2>The bottom line</h2>

<p>Nodepay is not just a "farming tool" but a real way to earn money: actively through answering questions. One of the few DePIN projects that has grown into something bigger and continues to develop and actually pay.</p>`,
      ru: `<p>Nodepay — один из самых крупных проектов в сфере DePIN (скачал программу и получаешь средства), который плавно перерос в целую платформу с реальными выплатами. Раньше люди могли просто скачать в браузер расширение и получать за это деньги.</p>

<p>Раньше Nodepay был просто расширением в браузере — вы устанавливали его в браузер, оставляли компьютер включённым, и проект платил токенами за то, что ваше устройство помогало сети. За первый аирдроп по такому направлению, люди получили от $60. Это был один из самых щедрых аирдропов в истории подобных проектов, получали деньги все кому не лень.</p>

<h2>Новое направление</h2>

<p>Сейчас у Nodepay лучшее новое направление: ответы на вопросы о крипте и рынке каждый день. Отвечаешь — получаешь баллы, которые потом можно обменять на токены $NC.</p>

<p>Так обычные пользователи уже заработали более $100 за несколько сезонов участия в проекте, просто включая браузер и отвечая на короткие вопросы.</p>

<h2>Поддержка и партнёры</h2>

<p>Nodepay поддерживают крупные партнёры и фонды: OKX Ventures, MEXC, LD Capital, Mirana Ventures и другие. Проект строится давно (с 2021 года) и уже выплатил миллионы токенов пользователям по всему миру.</p>

<p>Токен $NC торгуется с 17 января 2025 года и уже доступен на крупных биржах.</p>

<h2>Итог</h2>

<p>Nodepay — не просто «фармилка», а реальный способ получать деньги: активно через ответы на вопросы. Один из немногих DePIN-проектов, который перерос в что-то бОльшее и продолжает развиваться и реально платить.</p>`
    }
  },
  {
    slug: 'signals-simple',
    title: {
      en: 'Signals — in Simple Terms',
      ru: 'Signals — простым языком'
    },
    description: {
      en: 'How the question system works',
      ru: 'Как работает система вопросов'
    },
    content: {
      en: `<h2>What are Signals in Nodepay</h2>

<p>This is the foundation of the current project: a system of short questions about crypto inside Nodepay. You answer, suggest your own questions, vote for others' questions — and earn Signal Points for each action. These points can later be exchanged for $NC tokens.</p>

<h2>How to get access?</h2>

<p>Access is open to everyone: you can answer questions, promote others' questions, and earn points right away. But to withdraw earnings, you'll need to click "Get Verified" in your profile tab in the project dashboard. By paying a small fee, you'll get privileges, including the ability to withdraw earned funds.</p>

<h2>Stay updated!</h2>

<p>Nodepay is constantly evolving, with new features and rules appearing. To not miss anything — <a href="https://t.me/nodepaynews" target="_blank" rel="noreferrer">subscribe to our channel</a>.</p>`,
      ru: `<h2>Что такое Signals в Nodepay</h2>

<p>Это то на чем строится сейчас проект: система коротких вопросов про крипту внутри Nodepay. Вы отвечаете, предлагаете свои вопросы, голосуете за чужие вопросы — и за каждое действие получаете Signal Points. Эти очки позже можно обменять на токены $NC.</p>

<h2>Как получить доступ?</h2>

<p>Доступ открыт для всех: вы сможете отвечать на вопросы, продвигать чужие вопросы и получать баллы просто так. Но чтобы выводить доход нужно будет во вкладке вашего профиля в дашборде проекта нажать "Get Verified". Оплатив небольшую комиссию, вы получите привилегии, включая вывод заработанных средств.</p>

<h2>Следите за обновлениями!</h2>

<p>Nodepay постоянно развивается, появляются новые фичи и правила. Чтобы ничего не пропустить — <a href="https://t.me/nodepaynews" target="_blank" rel="noreferrer">подписывайтесь на наш канал</a>.</p>`
    }
  },
  {
    slug: 'tokenomics',
    title: {
      en: '$NC Tokenomics',
      ru: 'Токеномика $NC'
    },
    description: {
      en: 'Token distribution and unlock schedule',
      ru: 'Распределение токенов и график разблокировки'
    },
    content: {
      en: `<p>Nodepay has its own promising token with a well-planned distribution structure.</p>

<h2>Token supply</h2>

<p><strong>Total supply:</strong> 1,000,000,000 $NC<br>
<strong>Initial circulating supply at listing:</strong> 208,000,000 (~20.8%)</p>

<h2>Distribution</h2>

<ul>
<li><strong>Future Contributor Incentives</strong> — 265,000,000 (26.5%)</li>
<li><strong>Airdrop One</strong> — 115,000,000 (11.5%)</li>
<li><strong>Validators</strong> — 40,000,000 (4%)</li>
<li><strong>Ecosystem & Foundation</strong> — 225,000,000 (22.5%)</li>
<li><strong>Investors and Advisors</strong> — 215,000,000 (21.5%)</li>
<li><strong>Team</strong> — 140,000,000 (14%)</li>
</ul>

<h2>Unlock schedule</h2>

<p>Most team and investor tokens are locked and will be released gradually according to a vesting schedule. This protects against sudden price drops and ensures long-term project development.</p>

<h2>Useful links</h2>

<ul>
<li><a href="https://docs.nodepay.ai/nodecoin-usdnc/tokenomics" target="_blank" rel="noreferrer">Official tokenomics documentation</a></li>
<li><a href="https://solscan.io/token/B89Hd5Juz7JP2dxCZXFJWk4tMTcbw7feDhuWGb3kq5qE" target="_blank" rel="noreferrer">Solscan contract</a></li>
<li><a href="https://coinmarketcap.com/currencies/node-coin/" target="_blank" rel="noreferrer">CoinMarketCap</a></li>
<li><a href="https://www.coingecko.com/en/coins/nodecoin" target="_blank" rel="noreferrer">CoinGecko</a></li>
</ul>`,
      ru: `<p>У Nodepay есть свой перспективный токен с продуманной структурой распределения.</p>

<h2>Предложение токенов</h2>

<p><strong>Общее предложение:</strong> 1,000,000,000 $NC<br>
<strong>Начальный оборот при листинге:</strong> 208,000,000 (~20.8%)</p>

<h2>Распределение</h2>

<ul>
<li><strong>Future Contributor Incentives</strong> — 265,000,000 (26.5%)</li>
<li><strong>Airdrop One</strong> — 115,000,000 (11.5%)</li>
<li><strong>Валидаторы</strong> — 40,000,000 (4%)</li>
<li><strong>Экосистема & Foundation</strong> — 225,000,000 (22.5%)</li>
<li><strong>Инвесторы и советники</strong> — 215,000,000 (21.5%)</li>
<li><strong>Команда</strong> — 140,000,000 (14%)</li>
</ul>

<h2>График разблокировки</h2>

<p>Большая часть токенов команды и инвесторов заблокирована и будет выпускаться постепенно согласно графику вестинга. Это защищает от резких падений цены и обеспечивает долгосрочное развитие проекта.</p>

<h2>Полезные ссылки</h2>

<ul>
<li><a href="https://docs.nodepay.ai/nodecoin-usdnc/tokenomics" target="_blank" rel="noreferrer">Официальная документация по токеномике</a></li>
<li><a href="https://solscan.io/token/B89Hd5Juz7JP2dxCZXFJWk4tMTcbw7feDhuWGb3kq5qE" target="_blank" rel="noreferrer">Контракт в Solscan</a></li>
<li><a href="https://coinmarketcap.com/currencies/node-coin/" target="_blank" rel="noreferrer">CoinMarketCap</a></li>
<li><a href="https://www.coingecko.com/en/coins/nodecoin" target="_blank" rel="noreferrer">CoinGecko</a></li>
</ul>`
    }
  },
  {
    slug: 'account-security',
    title: {
      en: 'How to Protect Your Nodepay Account',
      ru: 'Как защитить аккаунт Nodepay'
    },
    description: {
      en: 'Security settings and best practices',
      ru: 'Настройки безопасности и рекомендации'
    },
    content: {
      en: `<p>In the profile tab, there's a "Security" button with important settings to protect your account.</p>

<h2>Email management</h2>

<p>You can change your email address at any time in the security settings.</p>

<h2>Two-Factor Authentication</h2>

<p>Two-Factor Authentication (2FA) adds an extra layer of security. Here's how to set it up:</p>

<ol>
<li>Download an authenticator app (for example, Google Authenticator) on your phone</li>
<li>In Nodepay security settings, enable 2FA</li>
<li>Scan the QR code with your authenticator app</li>
<li>From now on, when logging in, you'll need to enter the code from the app</li>
</ol>

<h2>Additional security features</h2>

<p>In the security section, you can also:</p>

<ul>
<li>View login history and active sessions</li>
<li>Terminate suspicious sessions</li>
<li>Change your connected wallet</li>
<li>Manage login methods</li>
</ul>

<p>Nodepay takes care of every user's security!</p>`,
      ru: `<p>Во вкладке профиля есть кнопка "Security" с важными настройками для защиты вашего аккаунта.</p>

<h2>Управление email</h2>

<p>Вы можете в любой момент изменить свой email в настройках безопасности.</p>

<h2>Двухфакторная аутентификация</h2>

<p>Two-Factor Authentication (2FA) добавляет дополнительный уровень защиты. Вот как её настроить:</p>

<ol>
<li>Установите приложение-аутентификатор (например, Google Authenticator) на телефон</li>
<li>В настройках безопасности Nodepay включите 2FA</li>
<li>Отсканируйте QR-код приложением</li>
<li>Теперь при входе нужно будет вводить код из приложения</li>
</ol>

<h2>Дополнительные возможности безопасности</h2>

<p>В разделе безопасности вы также можете:</p>

<ul>
<li>Просматривать историю входов и активные сессии</li>
<li>Завершать подозрительные сессии</li>
<li>Менять подключённый кошелёк</li>
<li>Управлять способами входа</li>
</ul>

<p>Nodepay заботится о безопасности каждого!</p>`
    }
  },
  {
    slug: 'antarctic-wallet',
    title: {
      en: 'Antarctic Wallet — Pay with Crypto in Stores!',
      ru: 'Antarctic Wallet — плати криптой в магазинах!'
    },
    description: {
      en: 'Multi-functional crypto wallet for everyday use',
      ru: 'Многофункциональный криптокошелёк для повседневного использования'
    },
    content: {
      en: `<p>Antarctic Wallet is a multi-functional crypto wallet that lets you pay with cryptocurrency in regular stores. It even works in Russia.</p>

<h2>Installation</h2>

<ol>
<li><a href="https://t.me/antarctic_wallet_bot/app?startapp=ref_ba0fa13bee" target="_blank" rel="noreferrer">Open the Telegram bot</a></li>
<li>Click "Wallet/Open"</li>
<li>Done!</li>
</ol>

<h2>Depositing USDT</h2>

<ol>
<li>Open "Top up Antarctic"</li>
<li>Choose method ("External wallet" or "Buy with rubles")</li>
<li>Follow instructions</li>
<li>Wait for deposit (usually instant)</li>
</ol>

<h2>Security</h2>

<p>The wallet supports recovery via email/phone/Telegram, PIN code protection, and balance hiding for privacy.</p>`,
      ru: `<p>Antarctic Wallet — многофункциональный криптокошелёк, который позволяет платить криптовалютой в обычных магазинах. Работает даже в России.</p>

<h2>Установка</h2>

<ol>
<li><a href="https://t.me/antarctic_wallet_bot/app?startapp=ref_ba0fa13bee" target="_blank" rel="noreferrer">Открыть Telegram бот</a></li>
<li>Нажать "Wallet/Открыть"</li>
<li>Готово</li>
</ol>

<h2>Пополнение USDT</h2>

<ol>
<li>Открыть "Пополнить Antarctic"</li>
<li>Выбрать способ ("Внешний кошелёк" или "Купить за рубли")</li>
<li>Следовать инструкции</li>
<li>Дождаться зачисления (моментально)</li>
</ol>

<h2>Безопасность</h2>

<p>Кошелёк поддерживает восстановление через почту/телефон/телеграм, защиту кодом-паролем и скрытие баланса для конфиденциальности.</p>`
    },
    isAd: true
  }
];

export const faqData = {
  en: [
    {
      question: 'What is Nodepay?',
      answer: 'Nodepay is a decentralized network where you earn $NC tokens. Simply put: you use the platform and answer questions, earning points that can later be exchanged for tokens. Inside the project, powerful processes and partnerships are taking place — that\'s how the team earns.'
    },
    {
      question: 'How do I start earning in Nodepay?',
      answer: 'Register on the website and start answering questions about crypto!'
    },
    {
      question: 'When was the $NC token listing?',
      answer: '$NC was listed on January 17, 2025.'
    }
  ],
  ru: [
    {
      question: 'Что такое Nodepay?',
      answer: 'Nodepay — децентрализованная сеть, где вы зарабатываете токены $NC. Проще говоря: вы пользуетесь платформой и отвечаете на вопросы, получаете баллы, которые потом можно обменять на токены. Внутри проекта проходят мощные процессы и партнёрства — на этом и зарабатывает команда.'
    },
    {
      question: 'Как начать зарабатывать в Nodepay?',
      answer: 'Зарегистрируйтесь на сайте и начните отвечать на вопросы о крипте!'
    },
    {
      question: 'Когда листинг токена $NC?',
      answer: 'Листинг токена $NC состоялся 17 января 2025 года.'
    }
  ]
};
