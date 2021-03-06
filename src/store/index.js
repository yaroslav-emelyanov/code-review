import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hocComponent: 'startPage',
    currentQuestion: 1,
    score: 0,
    status: true,
    finish: {
      beginner: {
        id: 1,
        condition: { min: 0, max: 4 },
        title: 'Стажер-практикант',
        text: `Вероятно, вы&nbsp;пока далеки от&nbsp;стройплощадки, а&nbsp;шуруповерт вам понятнее шурика. 
                Чаще бывайте на&nbsp;объектах и&nbsp;практикуйтесь с&nbsp;носителями языка&nbsp;&mdash; все приходит с&nbsp;опытом. 
                А&nbsp;еще заглядывайте на&nbsp;
                <a href="https://nlmk.shop/" style="color: white; text-decoration: none;" 
                target="_blank">nlmk.shop</a>
                , чтобы узнать больше о&nbsp;металлопродукции.`,
      },
      skilled: {
        id: 2,
        condition: { min: 5, max: 6 },
        title: 'Языковой прораб',
        text: `Многие слова вы&nbsp;знаете твердо, а&nbsp;остальные наверняка можете понять интуитивно. 
               Вы&nbsp;не&nbsp;потеряетесь на&nbsp;стройплощадке и&nbsp;сможете отличить заподлицо от&nbsp;чернухи. 
               И&nbsp;легко сориентируетесь в&nbsp;каталоге продукции <a href="https://nlmk.shop/" 
               style="color: white; text-decoration: none;" target="_blank">nlmk.shop</a>.`,
      },
      expert: {
        id: 3,
        condition: { min: 7, max: 8 },
        title: 'Инженер стройяза',
        text: `Вы&nbsp;часто бываете на&nbsp;стройплощадке&nbsp;&mdash; это ясно с&nbsp;полуслова. 
               Легко можете найти общий язык и&nbsp;с&nbsp;простым рабочим, и&nbsp;с&nbsp;отделом снабжения, 
               а&nbsp;затем быстро заказать все на&nbsp;<a href="https://nlmk.shop/" 
               style="color: white; text-decoration: none;" 
               target="_blank">nlmk.shop</a>. Майна вам по&nbsp;карьерной лестнице!`,
      },
      highLevel: {
        id: 4,
        condition: { min: 9, max: 10 },
        title: 'Старший бригадир',
        text: `С&nbsp;вами можно и&nbsp;в&nbsp;котлован, и&nbsp;на&nbsp;кран&nbsp;&mdash; вы&nbsp;всегда понимаете, что происходит, 
               и&nbsp;можете объяснить это другим. 
               Можете даже открыть свой образовательный курс&nbsp;&mdash; 
               <a href="https://nlmk.shop/" style="color: white; text-decoration: none;" 
               target="_blank">nlmk.shop</a> 
               поможет вам с&nbsp;наглядными пособиями.`,
      },
    },
    questions: [
      {
        id: 1,
        action: 'К вам подходит матерый строитель и&nbsp;спрашивает:',
        cloud: '&mdash;&nbsp;Шурика не&nbsp;видел? Вопрос жизни и&nbsp;смерти!',
        question: 'Что он хочет узнать?',
        rightAnswerId: 3,
        rightAnswerText: 'Шурик — это шуруповерт.',
        answer: {
          right: `Смекаете! Шурик&nbsp;&mdash; это 
                  шуруповерт. А&nbsp;&laquo;найти Шурика 
                  с&nbsp;шуриком по&#8209;шурику&raquo;&nbsp;&mdash; это 
                  быстро вызывать Александра 
                  с&nbsp;шуруповертом.`,
          wrong: 'А&nbsp;вот и&nbsp;нет. Шурик&nbsp;&mdash; это шуруповерт. Но&nbsp;ваш вариант нам тоже понравился.',
        },
        answers: [
          { id: 1, text: 'Видел ли я «Операцию „Ы“ и другие приключения Шурика».' },
          { id: 2, text: 'Куда делся стропальщик Саня.' },
          { id: 3, text: 'Срочно нужен шуруповерт.' },
          { id: 4, text: 'Ему нужен микрофон Shure.' },
        ],
      },
      {
        id: 2,
        action: 'Из-за угла выскакивает бригадир и&nbsp;загадочно шепчет на всю стройку:',
        cloud: '&mdash;&nbsp;У&nbsp;нас тут рюмка потерялась&nbsp;&mdash; работа встала. Давайте искать',
        question: 'Чего-чего?',
        rightAnswerId: 3,
        answer: {
          right: `Знатока сразу видно. 
                  Рюмка&nbsp;&mdash; это бункер для подачи бетона. 
                  Осталось понять, как его умудрились потерять.`,
          wrong: `Думаем, бригадир обрадовался&nbsp;бы и&nbsp;такой находке. 
                  Но&nbsp;все&nbsp;же &laquo;рюмка&raquo;&nbsp;&mdash; это бункер для подачи бетона. 
                  Зато теперь знаете.`,
        },
        answers: [
          { id: 1, text: 'Бригадир потерял тару для напитков. Нужно помочь ее найти.' },
          { id: 2, text: 'Рюмкой строители называют самосвал. Сейчас новый закажем.' },
          {
            id: 3, text: `А, понятно! Кто-то увез бункер для подачи бетона. 
                          Осталось выяснить куда.`,
          },
          { id: 4, text: 'Скорее всего, это фамилия какой-нибудь крановщицы.' },
        ],
      },
      {
        id: 3,
        action: 'Рабочий деликатно останавливает вас у грузовика и&nbsp;недоуменно произносит:',
        cloud: '&mdash;&nbsp;Ну&nbsp;и&nbsp;денек&nbsp;&mdash; вторая пачка кончилась. Есть еще?',
        question: 'Что он хочет узнать?',
        rightAnswerId: 3,
        answer: {
          right: `Бригада смотрит на&nbsp;вас с&nbsp;уважением. 
                  Пачка&nbsp;&mdash; это стопка листового металла, все верно.`,
          wrong: `Пачка&nbsp;&mdash; это стопка листового металла. 
                  Как и&nbsp;любая хорошая вещь, он&nbsp;быстро кончается. 
                  Запасайтесь впрок.`,
        },
        answers: [
          { id: 1, text: 'У бедолаги кончился аванс.' },
          {
            id: 2, text: `Пачка — это бетономешалка. 
                          Ну что же, придется отправлять на завод еще одну.`,
          },
          { id: 3, text: 'Элементарно. Пачка — это листы металла, сложенные друга на друга.' },
          { id: 4, text: 'Это может быть что угодно. Пачка чая, например.' },
        ],
      },
      {
        id: 4,
        action: `Вы проходите мимо компании сияющих 
                 от&nbsp;солнца сварщиков и&nbsp;слышите обрывок&nbsp;фразы:`,
        cloud: '&mdash;&nbsp;Я&nbsp;по&nbsp;молодости вот такого зайчика словил.',
        question: 'О чем это?',
        rightAnswerId: 2,
        answer: {
          right: `Верно! Поймать зайчика&nbsp;&mdash; это нечаянно посмотреть на&nbsp;сварку без защиты. 
                  Желаем вам знать это только в&nbsp;теории.`,
          wrong: `Вы&nbsp;ошиблись. Поймать зайчика&nbsp;&mdash; это нечаянно посмотреть на&nbsp;сварку без защиты. 
                  Чтобы такого не&nbsp;случилось, надевайте сварочную маску.`,
        },
        answers: [
          { id: 1, text: 'Видимо, мимо пробегал заяц, которого он поймал.' },
          {
            id: 2, text: `Словить зайчика — это случайно посмотреть на сварку. 
                          После этого в глазах мелькают искры — зайчики.`,
          },
          { id: 3, text: 'Зайчик — это премия. Сварщик тогда хорошо потрудился и узнал размер доплаты.' },
          { id: 4, text: 'Зайчиком называют электрод немецкой фирмы ZAICH.' },
        ],
      },
      {
        id: 5,
        action: 'Прораб с хитрым прищуром машет вам рукой и просит подойти к грунтовой площадке:',
        cloud: '&mdash;&nbsp;Ну, сами видите. Шлеп-нога понадобится. А&nbsp;то&nbsp;и&nbsp;несколько.',
        question: 'Кто это? Что это?',
        rightAnswerId: 4,
        answer: {
          right: `Отличные познания. 
                  Шлёп-нога&nbsp;&mdash; это аппа-па-па-рат для вибротрамбо-бо-бо-бовки поверхносте-е-е-е-ей.`,
          wrong: `Похоже, вы&nbsp;встали не&nbsp;с&nbsp;той ноги... 
                  Шлёп-нога&nbsp;&mdash; это аппарат для вибротрамбовки поверхностей. 
                  Смешно звучит, потому теперь запомнится навсегда.`,
        },
        answers: [
          { id: 1, text: 'Прозвище бульдозериста, который должен приехать и все разровнять.' },
          { id: 2, text: 'Элементарно. Это специальная широкая лопата для грунта.' },
          { id: 3, text: 'Меня не подловишь! Нет такого термина в строительстве.' },
          { id: 4, text: 'Судя по всему, это вибротрамбовщик.' },
        ],
      },
      {
        id: 6,
        action: `Около вагончика строителей вы замечаете только что отгруженную партию металлоизделий. 
                 Стоящий рядом сварщик спрашивает:`,
        cloud: '&mdash;&nbsp;Нравится тыщевка?',
        question: 'Что-что?',
        rightAnswerId: 4,
        answer: {
          right: `Вы&nbsp;знаете толк в&nbsp;прекрасном.
                  Тыщевка&nbsp;&mdash; это труба диаметром 1&nbsp;000&nbsp;миллиметров, все верно.`,
          wrong: `Мимо. Тыщевка&nbsp;&mdash; это труба диаметром 1&nbsp;000&nbsp;миллиметров. 
                  Во-о-т такая здоровая.`,
        },
        answers: [
          { id: 1, text: 'Так называют большую партию стройматериалов.' },
          { id: 2, text: 'Тыщевка — это вагончик строителей. На обеде туда может поместиться тысяча человек.' },
          { id: 3, text: 'Это общая скорость работы. Тыщевка может быть быстрой или медленной.' },
          { id: 4, text: 'Сварщик увидел трубу диаметром 1 000 миллиметров. Это и есть тыщевка.' },
        ],
      },
      {
        id: 7,
        action: `Работник вздыхает и задумчиво смотрит на вырытую траншею. 
                 Вы подходите к нему. Он произносит: `,
        cloud: '&mdash;&nbsp;Скоро тут чернуха будет.',
        question: 'Что будет?',
        rightAnswerId: 4,
        answer: {
          right: 'Вас не&nbsp;проведешь. Чернуха&nbsp;&mdash; это труба из&nbsp;черного металла.',
          wrong: 'Грязь, черника и&nbsp;яма тут не&nbsp;при чем. Чернуха&nbsp;&mdash; это труба из&nbsp;черного металла.',
        },
        answers: [
          { id: 1, text: 'Грязь, месиво, рев бульдозеров. В общем, какие-то сложные строительные работы.' },
          { id: 2, text: 'Работники так называют ягоду чернику. Видимо, решил засеять ей траншею.' },
          { id: 3, text: 'Это не траншея, а яма для ремонта техники. Скоро здесь будут чумазые механики.' },
          { id: 4, text: 'Хм, судя по всему, здесь будут проложены трубы из черного металла.' },
        ],
      },
      {
        id: 8,
        action: 'Работник с довольным видом смотрит на уложенную плитку и произносит:',
        cloud: '&mdash;&nbsp;Заподлицо получилось, хе-хе.',
        question: 'Что бы это могло значить?',
        rightAnswerId: 4,
        answer: {
          right: 'Вы&nbsp;не&nbsp;ударили в&nbsp;грязь лицом. Заподлицо&nbsp;&mdash; это укладка вровень с&nbsp;поверхностью.',
          wrong: 'Случилось явное недопонимание. Заподлицо&nbsp;&mdash; это укладка вровень с&nbsp;поверхностью.',
        },
        answers: [
          { id: 1, text: 'Работник сделал какую-то шалость. Возможно, положил под плитку ключи от соседней бытовки.' },
          { id: 2, text: 'Это простое одобрение. Заподлицо значит «хорошо».' },
          {
            id: 3, text: `Работник представляет свое повышение в должности.
                          Был подлицо, а станет заподлицо.`,
          },
          { id: 4, text: 'Он очень красиво  уложил плитку вровень с поверхностью.' },
        ],
      },
      {
        id: 9,
        action: 'Высоченный работник смотрит на слегка гнутый лист проката. Затем он зычно выдает:',
        cloud: '&mdash;&nbsp;Балду в&nbsp;студию!',
        question: 'Чего-о-о?',
        rightAnswerId: 4,
        answer: {
          right: 'В&nbsp;яблочко! Балда&nbsp;&mdash; это кувалда. Бум! Бдыщ!',
          wrong: 'Промах. Балда&nbsp;&mdash; это кувалда. Зато теперь вы&nbsp;это знаете.',
        },
        answers: [
          { id: 1, text: 'Балда — это провинившийся работник, который сейчас будет выпрямлять этот лист.' },
          { id: 2, text: 'Легкий вопрос. Балда — это специальный гидравлический распрямитель металла.' },
          { id: 3, text: 'Опять пытаетесь меня подловить. Нет такого слова в языке строителей.' },
          { id: 4, text: 'Тут все ясно: балда — это кувалда.' },
        ],
      },
      {
        id: 10,
        action: `Плотники разглядывают доски, которые только что привезли на стройплощадку. 
                 Один из них прикладывает к доскам рулетку. Затем оборачивается к вам:`,
        cloud: '&mdash;&nbsp;Будет стусло&nbsp;&mdash; к&nbsp;вечеру все сделаем',
        question: 'Осталось понять, что это такое.',
        rightAnswerId: 4,
        answer: {
          right: `Вы&nbsp;верно поняли плотников. 
                  Стусло&nbsp;&mdash; это лоток для резки досок и&nbsp;труб под определенным углом. 
                  К&nbsp;вечеру все будет готово.`,
          wrong: `Хоть вы&nbsp;и&nbsp;ошиблись, плотники все объяснили: 
                  стусло&nbsp;&mdash; это лоток для резки досок и&nbsp;труб под определенным углом.`,
        },
        answers: [
          { id: 1, text: 'Стусло — это премия. Плотники называют ее именно так.' },
          { id: 2, text: 'Плотникам нужна электроножовка, чтобы нарезать доски быстро и аккуратно.' },
          { id: 3, text: 'Плотники меня подкалывают. Стусло — это вымышленный инструмент.' },
          { id: 4, text: 'Стусло — это лоток для резки дерева под нужным углом.' },
        ],
      },
    ],
  },
  mutations: {
    testStart(state) {
      state.hocComponent = 'test';
    },
    showIntermediateResult(state, { id, width }) {
      const question = state.questions[state.currentQuestion - 1];
      const { rightAnswerId } = question;
      const isCorrect = rightAnswerId === id;

      if (isCorrect) state.score += 1;
      state.status = isCorrect;

      if (width > 1024) {
        state.hocComponent = 'result';
      } else {
        setTimeout(() => {
          state.hocComponent = 'result';
        }, 500);
      }
    },
    nextQuestion(state) {
      const isFinish = state.currentQuestion === state.questions.length;

      if (isFinish) {
        state.hocComponent = 'finish';
      } else {
        state.currentQuestion += 1;
        state.hocComponent = 'test';
      }
    },
    beginTestAgain(state) {
      state.score = 0;
      state.currentQuestion = 1;
      state.hocComponent = 'test';
    },
  },
  actions: {
  },
  modules: {
  },
  getters: {
    hocComponent: (s) => s.hocComponent,
    currentQuestion: (s) => s.questions[s.currentQuestion - 1],
    numberCurrentQuestion: (s) => s.currentQuestion,
    amountQuestions: (s) => s.questions.length,
    answers: (s) => {
      const { answers } = s.questions[s.currentQuestion - 1];
      return answers.sort(() => Math.random() - 0.5);
    },
    answer: (s) => {
      const { status, currentQuestion, questions } = s;
      const { answer } = questions[currentQuestion - 1];
      return status ? answer.right : answer.wrong;
    },
    finish: (s) => {
      const { score, finish } = s;
      const finishKeys = Object.keys(finish);

      let result;
      for (let i = 0; i < finishKeys.length; i += 1) {
        const key = finishKeys[i];
        const { min, max } = finish[key].condition;
        if (score >= min && score <= max) {
          result = finish[key];
          break;
        }
      }
      return result;
    },
  },
});
