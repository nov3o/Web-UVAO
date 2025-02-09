choicesRu = {}

//[music,background,text,mode]
//all scenes
scenesRu = [
  ['theme2.mp3','black.jpg','<i>За окном медленно падает снег. В круговороте кружатся снежинки, которые еще не знают, что через мгновение разлетятся в разные стороны и уже никогда не будут вместе, как прежде.</i>','dialogue'],
  [,,'<i>Они неспешно опускаются на одинокий огонек в ночи и мгновенно исчезают, тая в его жарком пламени.</i>',],
  [,'room.jpg','Раздавшийся телефонный звонок оторвал меня от моих размышлений, я поспешно выбросил сигарету, злорадно надеясь, что она попадет в какого-нибудь прохожего, который в данный момент мог бы пройти под моим окном.'],
  [,,'Я прикрыл поплотнее дверь на лоджию и, растирая замерзшие руки, поспешил к мобильному, который казалось что вот-вот вибрируя спрыгнет со стола.'],
  [,,'Взглянув украдкой на экран, я выдавил из себя фальшивую улыбку:'],
  [,,'—<i> Привет, мам. Нет, все отлично. Нет, в этом году не получится...</i>'],
  [,,'—<i> Ну, как? Я уже договорился, у нас тут своя компания будет. </i>'],
  [,,'—<i> Ну ты чего? Какие наркотики? Притон? Мам, мы серьезные взрослые люди</i>, - я фальшиво рассмеялся. '],
  [,,'Звонила моя мать, которая в очередной раз спрашивала, не приеду ли я на новогодние выходные.'],
  [,,'Отмахиваясь тем, что у меня корпоративы на работе, вечеринки с друзьями, и, вообще, я бы хотел встретить Новый год с любимой девушкой, я ежеминутно врал. '],
  [,,'Казалось, я и сам хотел поверить в свою ложь. Но правда была куда унылее, чем мои россказни. Шутливо поздравив родителей еще разок, мы распрощались до следующего года.'],
  [,,'Я взглянул на время на дисплее и уныло поплелся на кухню, пора было бы пообедать, да и кот, с мурчанием потершийся о мою ногу, явно намекал, что он не против полакомиться.'],
  [,,'Пошуровав в холодильнике и не найдя там ничего того, чем бы я смог утолить голод, я, накинув куртку и зашнуровав ботинки, уныло поплелся в ближайший супермаркет.'],
  [,,'К моему удивлению, он уже был закрыт. Это было странно, учитывая то, что 31-ого декабря, да еще и вечером, многие люди всё ещё закупаются, и закрывать магазин было попросту глупо.'],
  [,,'Плюнув на всё, я отправился в ближайший Мак, рассчитывая, что нормальные люди уж точно либо носятся по магазинам, либо дома оливье нарезают, и толп народа, как это бывает обычно, там не будет.'],
  [,'koczki.jpg','У входа в "ресторан" я чуть было не врезался в двух молодых девушек.'],
  [,,'—<i> Стой, бестолочь!</i> - крикнула одна из них вслед выбежавшей из дверей другой девушке, но та уже скрылась где-то в тени близлежащего парка.'],
  [,'koczka.jpg','—<i> Арр! А ты чего уставился?</i>'],
  [,,'Девушка злобно зыркнула на меня своими жёлтыми глазами. На секунду мне показалось, что в её глазах было нечто нечеловеческое, но она тут же отвела взгляд и отправилась вслед за убежавшей.'],
  [,'slavia.jpg','В Маке было не так людно, как я рассчитывал, но стандартный набор (визжащие дети и их глупые мамаши, гыгыкающие школьники и заумные хипстеры с ноутбуками) присутствовали.'],
  [,,'При входе я заметил листок, на котором аккуратным почерком было написано: "31 декабря работаем до последнего клиента!", и молодая девушка на кассе, увидев зашедего меня, грустно вздохнула.'],
  [,,'Она была симпатичной, с длинными светлыми косами, но с очень грустными глазами. Еще бы, торчать здесь в канун Нового года и ждать пока все не уйдут, чтобы наконец отправиться к друзьям или к своему молодому человеку, чтобы под шампанское встретить бой курантов.'],
  [,,'Подойдя к ней, я на минуту задумался, что неплохо было бы сейчас завести с ней разговор (вряд ли кто-то будет ругать её за это, похоже, что из персонала во всем кафе осталась только она), но как обычно я струхнул в последний момент, вспомнив свою последнюю девушку.'],
  [,'table.jpg','Наугад выбрав бургер и попросив крепкого кофе к нему, я уселся за самый дальний столик, чтобы меня никто не беспокоил, где я мог спокойно насладиться вкусовыми добавками и погрузиться в свои невеселые мысли.'],
  [,,'Таня. Моя уже бывшая. Вот ведь стерва. Ну ладно, я уже пережил наше с ней расставание, да и в последнее время отношения у нас все остывали и остывали, а встречались мы все реже и реже.', 'full-page-text'],
  [,,'Но порвать со мной так, на глазах у наших общих друзей, приведя своего нового ухажёра, и на моих глазах начав сцену из фильма рейтинга 18+? В тот момент, я почувствовал себя сломанной игрушкой, которую хозяйка выбрасывает на помойку.'],
  [,,'Всё это случилось меньше недели назад, но и за это время я понял, что и друзья те были не мои, а её прежде всего. Мои же друзья давно перестали со мной общаться, ведь мне было некогда с ними видеться, пока я "наслаждался жизнью" с этой... И вот, Новый год на носу, а я сижу как сыч в одиночестве.'],
  [,,'Хотя почему же в одиночестве? Успешный мужчина с котом. ','dialogue'],
  [,,'Я грустно улыбнулся своему отражению в кружке. Скомкав бумажку от бутерброда и перелив в себя остатки кофе, я собрал мусор на поднос и уже собирался уходить. Бросив взгляд на сиденье, не забыл ли я что-нибудь, я приметил сиреневую шапочку.'],
  [,'hat.jpg','Возможно, кто-то оставил её здесь, кто ужинал до меня.'],
  [,,['Отнести шапочку на кассу','Попробовать отыскать хозяйку шапочки'],'choice'],
]

choicesRu[0] = [
  [,,'Я отнес поднос и отправился в сторону кассы. Девушка, стоявшая за ней, то и дело поглядывала на часы. А сейчас она поглядывала на меня. Я неуверенно промямлил:','dialogue'],
  [,,'—<i> Вот, на сидушке нашёл.</i>'],
  [,,'—<i> Хорошо... Я заберу её.</i>'],
  [,,'Девушка спрятала шапку куда-то под кассу, мне на секунду представилось, что у нее там большая урна, но я прогнал эти мысли. Девушка улыбнулась:'],
  [,,'—<i> Спасибо. С Новым годом!</i>'],
  [,,'Я что-то буркнул в ответ, и поспешил ретироваться.'],
  [,,'Мне показалось, что в тот момент, как я открыл дверь наружу, кто-то за спиной тяжело вздохнул. Неужели та девушка за кассой? Небось думает себе "Ну наконец-то ушёл".'],
  [,,'Я мрачно натянул капюшон. Заглянув в ближайший работающий ларёк, я взял какого-то дешевого пойла, в надежде забыться в алкоголе.'],
  ['piano.mp3','kitchen.jpg','Так оно и получилось. Жизнь, серая и унылая, нисколько не изменилась после праздников. Выходные закончились, я вернулся к своей работе, и в этой рутине уже было некогда думать о своих проблемах. '],
  [,,['Концовка: не очень.','','Попробуйте снова.'],'badEnd']
]

choicesRu[1] = [
  ['theme2.mp3','hat.jpg',,'empty'],
  [,,'Я поднял шапку и внимательно рассмотрел её. Что-то в ней меня смущало.', 'dialogue'],
  [,,'Нет, не детский фасон (вроде как шапочка явно на взрослую, но я не мог представить себе взрослую девушку с таким помпоном на голове), а две прорези по обе стороны от него. '],
  [,,'Тут было два варианта: либо кому-то наставили рога, либо обладательница шапочки была настоящая нека.'],
  [,,'Я ухмыльнулся, но тут же в голове всплыла встреча у входа в Мак. Та убежавшая девушка... Хоть её голова и была накрыта капюшоном, но я был почему-то уверен, что под ним ничего, прикрывающего её голову не было.'],
  [,,' Возможно ли, что это она была той, кто оставил свою шапку в Маке под Новый год? Нека? Глупость конечно, но ведь говорят, что в эту ночь и не такое встретишь. Я сунул шапочку себе в карман, и вынес поднос. Кассирша мило улыбнулась:'],
  [,'slavia_smile.jpg','—<i> Всего доброго и с Новым годом! - кассирша мило улыбнулась.</i>'],
  [,,'Я улыбнулся в ответ, отметив для себя на будущее, обязательно заглянуть в этот Мак и познакомиться с этой девушкой.'],
  [,'street.jpg','Я вспомнил, что та девушка побежала в сторону парка, потому отправился в его сторону. Что ж, погуляю с полчасика, все равно заняться мне особо нечем. '],
  [,,'Не найду - пойду домой. Вдали в свете фонарей мне привиделась человеческая фигурка, явно принадлежавшая молодой девушке.'],
  [,,' Я шагнул на присыпанные снегом дорожки, и двинулся по аллее.'],
  [,,['Зайти в парк'],'choice'],
]
//maze
choicesRu[10] = [ //2010
  ['maze.mp3','park.jpg','Я стою у входа в парк. Куда мне пойти?','dialogue'],
  [,,['Налево','Прямо','Направо'],'choice']
]

choicesRu[100] = [ //2007 //to 10 proved
  ['maze.mp3','1way.jpg','Дорожка привела меня в тупик.','dialogue'],
  [,,['Вернуться ко входу в парк'],'choice']
]

choicesRu[101] = [ //2014 
  [,'2way.jpg','Очередная развилка','dialogue'],
  [,,['Налево','Направо'],'choice']
]

choicesRu[1010] = [ //2011
  [,'2way.jpg','Развилка','dialogue'],
  [,,['Прямо','Направо'],'choice'],
]

choicesRu[10100] = [ //2015
  [,'2way.jpg','Очередная развилка ','dialogue'],
  [,,['Налево','Направо'],'choice']
]

choicesRu[1011] = [ //2016
  [,'lavochka.jpg','Тропинка поворачивает налево','dialogue'],
  [,,['Налево'],'choice'],
]

choicesRu[10110] = [ //2013
  [,'3way.jpg','Снова развилка.','dialogue'],
  [,,['Налево','Прямо','Направо'],'choice']
]

choicesRu[102] = [ //2012
  [,'2way.jpg','Очередная развилка ','dialogue'],
  [,,['Прямо','Направо'],'choice']
]

choicesRu[101001] = [
  ['theme2.mp3',,'Внезапно кто-то крикнул прямо за моей спиной.','dialogue'],
  [,,'—<i> Бу!</i>'],
  [,'koczka_smile.jpg','Я от неожиданности подскочил на месте, но взяв в себя в руки, обернулся. Передо мной стояла милая девочка, лет 17, наверное. На голове её мелко подрагивали ушки. Я достал из кармана свою находку и протянул ей.'],
  [,,'—<i> О! Моя шапка! Спасибо!</i>'],
  [,'koczka_hat.jpg','Она быстро натянула шапку на голову. Я хотел её немного поругать за её рассеянность, но кошачьи ушки на её голове то и дело сбивали меня.'],
  [,,'Наконец, я собрался с мыслями и выдавил:'],
  [,,'—<i> А где та? Вторая?</i>'],
  [,,'—<i> Вторая?</i'],
  [,,'Она удивленно посмотрела на меня, но затем поняла, кого я имел в виду.'],
  [,,'—<i> А, моя сестра! Она ушла домой, после того, как не смогла найти меня. Я хорошо знаю этот парк и спряталась от неё!</i>'],
  [,,'Она явно этим гордилась.'],
  [,,'—<i> Поругались?</i> - поинтересовался я.'],
  [,,'—<i> Да нет…</i>'],
  [,,'Девочка решила сменить тему:'],
  [,,'—<i> А куда ты идёшь?</i>'],
  [,,['Продолжить диалог','Уйти от разговора'],'choice']
]

choicesRu[1010010] = [
  ['kitten.mp3','koczka_smile.jpg','— Не знаю, я тут по парку гулял, искал маленьких неко-девочек.','dialogue'],
  [,,'Девочка засмеялась. С ней почему-то было легко и просто общаться.'],
  [,,'—<i> А можно мне с тобой? Я хорошо знаю это место и твои поиски точно увенчаются успехом!</i>'],
  [,,'—<i> Да я вроде бы уже одну нашел. Наверное, мне пора домой...</i>'],
  [,,'Моя собеседница надула губки:'],
  [,,'—<i> Уже? Даже не погуляем? Даже не познакомимся?</i>'],
  [,,'Я медленно поплелся к выходу из парка.'],
  [,,'—<i> Моя сегодняшняя миссия выполнена, я спас странную девочку от холодной смерти. Домой пора, скоро за стол садиться...</i>'],
  [,,'Девочка не отставала и вышагивала рядом со мной.'],
  [,'koczka_tongue.jpg','—<i> Вруша. Ты заставляешь лолисичек плакать, - сказала она и показала мне язык.</i>'],
  [,,'—<i> Кого?</i> - не понял я.'],
  [,,'—<i> Неважно! Тебе же не с кем встречать Новый год?</i>'],
  [,,'—<i> Почему ты так думаешь?</i>'],
  [,,'—<i> Я всё про тебя знаю! Ну или почти всё…</i> - она загадочно отвела взгляд'],
  [,,'—<i> Ну кто ещё станет жевать бургеры под Новый год, когда все нормальные люди либо уже наелись, готовя тазики салатов, либо в магазинах очереди отстаивают, чтобы этих салатов купить!</i>'],
  [,,'—<i> Ладно, ладно, ну да, один,</i> - согласился я,<i> - ну, или почти. Я может всю жизнь мечтал посмотреть речь президента с котом в обнимку. Ты кстати ему бы отличную компанию составила.</i>'],
  [,,'Девочка обиженно прижала уши.'],
  [,,'—<i> Всё вы люди шутки шутите. Я между прочим на важном задании! Обеспечить первого встречного новогодним настроением!</i>'],
  [,,'Я хмыкнул и шаловливо поиграл руками:'],
  [,,'—<i> А не боишься? Маленьким девочкам по парку ночью вообще опасно гулять. Там всякие нехорошие дяденьки водятся.</i>'],
  [,,'—<i> Вот ещё! Я хоть и выгляжу беззащитной, но если надо - сумею себя защитить!</i>'],
  [,,'Мы некоторое время шли молча, наконец перед нами появились ворота парка.'],
  [,,'—<i> Ну вот и все, иди домой и с сестрой больше не ссорьтесь.</i>'],
  [,,'Я махнул рукой, и пошёл в сторону своего дома.'],
  [,,'Через несколько шагов я услышал, что вслед за мной кто-то идёт.'],
  [,,'—<i> Ну и кто тут в сталкера играет?</i>'],
  [,,'Я резко обернулся, слегка напугав неку, которая шла за мной. Она попыталась спрятаться за столбом, но даже несмотря на её миниатюрные размеры у неё это не получилось.'],
  [,,'—<i> Иди домой, кому говорят.</i>'],
  [,,'Она вышла из-за укрытия и принялась разглядывать свои сапоги.'],
  [,'koczka_sad.jpg','—<i> Но ведь это неправильно... Новый год встречать в одиночестве.</i>'],
  [,,'—<i> Ага, значит ты предлагаешь, встретить его вместе?</i>'],
  [,,'—<i> Ну…</i>'],
  [,,'—<i> И почему я должен впускать к себе в дом подозрительную девочку-подростка? Кто мне гарантирует, что на завтра я не проснусь мёртвым, а из моей квартиры вынесут всё, что в ней нет, включая кота?</i>'],
  [,,'—<i> А как это, проснуться мертвым?</i> - удивилась Нека.'],
  [,,'— Ну, теоретически, раз можно заснуть живым, то и проснуться можно мертвым!'],
  [,,'Девочка задумалась. Я сам не заметил, как мы уже шли в сторону моего дома.'],
  [,,'—<i> Ну ладно, пошли.</i>'],
  [,,'Девочка удивленно посмотрела на меня:'],
  [,,'—<i> Но мы и так идем.</i>'],
  [,,'—<i> Ну, я должен был это сказать. Наверное.</i>'],
  [,,'<i>Нека хитро улыбнулась.</i>'],
  [,,'—<i> И да, как тебя называть, а то нашему сценаристу придумывать синонимы к слову "девочка" надоело.</i>'],
  [,,'—<i> Ю... -</i> на секунду она запнулась, -<i> пусть будет Юля!</i>'],
  [,,'—<i> Будет? Я был прав на счёт подозрительных девочек с кошачьими ушками. Вон, уже вымышленные имена в дело пошли.</i>'],
  [,,'Юля улыбнулась, ничего не ответив.'],
  [,,'К своему удивлению, магазин, который час назад был закрыт, вновь открылся, и мы с Юлей закупились мандаринами и чаем, я взял в отделе готовой продукции пару новогодних салатов.','full-page-text'],
  [,,'"Вот этот обязательно!" - сказала Юля и вручила мне контейнер с селедкой под шубой, и двумя трехлитровыми банками томатного сока.'],
  [,,'Ну и, конечно, купили кошачий корм и банку сметаны для домашнего любимца. Уже дома Юля помогла мне накрыть на стол, потом с радостью принялась пить сок.'],
  [,'koczka_home.jpg','Юля выглядела очень счастливой, а её счастье видимо передавалось воздушно-капельным путем, так как вскоре и я почувствовал себя счастливым.','full-page-text'],
  [,,'В квартире откуда-то появился знакомый с детства хвойный аромат вперемешку с запахом мандаринов. Я сидел в кресле и наблюдал, как Юля, сидящая напротив, шипит и щурится, жуя мандарины.'],
  [,,'На её коленях сидел толстый и довольный кот. Через несколько минут меня захватила сладкая дрёма и я провалился в сон.'],
  [,,,'empty'],
  [,'black','Кто-то звал меня по имени:','dialogue'],
  [,,'—<i> ...!</i>'],
  [,'koczka_summer.jpg','Я приоткрыл глаза, рядом со мной стояла Юля в летнем платье. Увидев, что я проснулся, она схватила меня за руку и помогла встать. Мы находились у лесного озера, на берегу которого, я и спал в шезлонге.'],
  [,,'—<i> Юль, ты чего?</i>'],
  [,,'Я позевывая шёл за ней, она же крепко меня держала за руку, ведя к воде.'],
  [,'koczka_hand.jpg','Наконец, мы остановились на берегу, мои ноги изредка покрывала морская пена. Интересно, откуда в озере волны и морская пена? Юля ощутимо ткнула меня в спину:'],
  [,,'—<i> Смотри!</i>'],
  [,,'Я увидел в отражении себя. Таким каким был. Начесанный, с покрасневшими уставшими глазами, в несвежей одежде. На лице была такая усталость от жизни, что я на секунду отпрянул. Юля дернула меня за рукав:'],
  [,,'—<i> Да не туда смотри.</i>'],
  [,,'Я посмотрел вперёд. Передо мной расстилалось бескрайнее море, вдоль берега в нём отражались корабельные сосны (так вот откуда был хвойный запах), дальше по нему устало ползли легкие облака.'],
  [,,'—<i> Красиво… -</i> вздохнул я.'],
  [,,'—<i> Да, красиво. И этот мир будет прекрасен так или иначе. Даже без тебя. Даже с тобой, мрачным и угрюмым. Но стоит ли портить общую картину?</i>'],
  [,,'<i>Ведь всего-то лишь стоит улыбнуться и жить дальше, не оглядываясь назад. Найти себе человека, который сможет тебя поддержать…</i>'],
  [,,'—<i> Тебя?</i>'],
  [,,'Юля покачала головой:'],
  [,,'—<i> Нет, я всего-лишь новогоднее чудо. Точнее я твой личный глюк. Или ангел-хранитель. Как хочешь,</i> - улыбнулась она,<i> - Неужели ты и правда веришь, что под Новый год можно встретить неку в Макдональдсе?</i>'],
  ['maze.mp3',,'Девочка рассмеялась и скрылась из виду. Я же остался стоять на краю зеркального отражения. Может она права? Я прикрыл глаза на мгновение… И тут же получил сильный толчок в спину, окунувшись с головой в воду. '],
  [,'black','Я открыл глаза и резко поднялся.'],
  ['theme1.mp3','slavia_close.jpg','Девушка, стоявшая подле, от моего движения, отпрыгнула, испуганно закрывшись подносом. Я огляделся по сторонам: пустой Макдональдс, вечер, около меня стоит кассирша, та самая, с длинными косами.'],
  [,,'—<i> Ой…</i> - она выглянула из-за подноса,<i> - Простите, я не хотела вас пугать. Вы так сладко спали, но мне не очень хотелось встречать Новый год в Макдональдсе… </i>'],
  [,,'Я почувствовал, как краснею, но все же попытался приободрить девушку:'],
  [,,'—<i> Я бы тоже не хотел, так что спасибо, что разбудили.</i>'],
  [,,'—<i> Вот и славно.</i>'],
  [,,'Она с минуту помялась, но потом все же спросила:'],
  [,,'—<i> А почему вы решили встретить Новый год в Макдональдсе?</i>'],
  [,,'<i>- Вообще-то это не я решил. Да и не планировал я такого. Просто что-то задремал... Еще сон какой-то странный приснился. Извините, вас наверное родители или друзья ждут, а вы тут посетителей пытаетесь разбудить.</i>'],
  [,,'Девушка снова улыбнулась:'],
  [,,'—<i> Вовсе нет, я в этом году одна видимо встречаю. Но все-таки Мак - не лучшее для этого место.</i>'],
  [,,'Я собрал всю свою уверенность и выпалил:'],
  [,,'—<i> А давайте вместе встретим!</i>'],
  [,,'Я уже был готов получить отказ, но девушка снова улыбнулась и ответила:'],
  [,,'—<i> Почему бы и нет? Вдвоем ведь и правда лучше! Вы только подождите, я кассу закрою и переоденусь.</i>'],
  [,,'—<i> Хорошо.</i>'],
  [,,'Девушка скрылась за дверью "служебное помещение", а я сел, чувствуя как на моем лице появляется улыбка вместе с румянцем.'],
  [,'slavia_sweater.jpg','Через пару минут, девушка вернулась, уже в обычной одежде и без фирменного козырька.'],
  [,,'—<i> Кстати, меня Славя зовут!</i>'],
  [,'slavia_out.jpg','Мы болтали со Славей обо всем: я узнал, что она только-только переехала в наш город учиться и пока не завела тут знакомых, так что я её первый друг.'],
  [,,'От этого сразу стало так тепло, даже не смотря на то, что на улице было куда ниже нуля. Вдруг что-то просвистело и над нами красиво распустились цветы праздничного салюта.'],
  [,,'Где-то закричали "<i>Ура!</i>", а мы просто стояли и смотрели, как яркие огоньки освещают небо. И я знал, что нас со Славей впереди ждет только хорошее.'],
  [,,['Хорошая концовка.','С Новым годом :3',],'slow-down'],
]	

choicesRu[1010011] = [
  [,'watch.jpg',,'empty'],
  [,,'Я взглянул на часы:','dialogue'],
  [,,'—<i> Пожалуй, домой.</i>'],
  [,,'Девочка подошла ко мне поближе и посмотрела прямо в глаза.'],
  [,'koczka_eyes.jpg','—<i> А можно мне с тобой?</i>'],
  [,,'Я отпрянул: зрачки её были явно нечеловеческие, а кошачьи, вытянутые. Ответить отрицательно я как-то побаивался, поэтому, просто что-то промычал в ответ, что моя собеседница восприняла, как положительный ответ.'],
  [,,'—<i> Замечательно!</i>'],
  [,,'Мы не особо общались по пути ко мне домой, но похоже неко-девочке это было не так и важно: она весело вышагивала рядом.'],
  [,,'На входе из парка нам встретилась та, "вторая".'],
  [,'koczki_park.jpg','Она злобно зыркнула на меня, схватила "первую" под руку и громко зашептала ей в ухо, что даже я всё услышал:'],
  [,,'—<i> Ты что не видишь, что ему уже не помочь? Он не верит в это всё.</i>'],
  [,,'Я негромко кашлянул.'],
  [,,'—<i> Я, пожалуй пойду.</i>'],
  [,,'"Первая" девочка жалобно спросила у меня:'],
  [,,'—<i> Неужели ты правда не веришь?</i>'],
  [,,'Я не совсем понимал, что она имеет в виду, так что промолчал.'],
  [,,'—<i> Арр! Делай что хочешь!</i> - сказав это, "вторая" скрылась в парке.'],
  [,'koczka_surprised.jpg','"Первая" посмотрела ей вслед, но не стала её преследовать.'],
  [,,'Я участливо поинтересовался:'],
  [,,'—<i> Не догонишь её? Вы же сёстры. Не надо ссорится.</i>'],
  [,,'Девочка грустно взглянула на меня:'],
  [,,'—<i> А мы и не ссорились. Просто она думает, что ты не веришь.</i>'],
  [,,'Я глубоко вздохнул:'],
  [,,'—<i> А я об этом что думаю?</i>'],
  [,,'Девочка слегка приободрилась:'],
  [,,'<i>- Я не знаю. Но я надеюсь, что веришь. Ведь если верить, то чудо обязательно случится!</i>'],
  [,,'Ну вот, мало мне поссорившихся девочек-косплеерш пубертатного возраста, так они еще и ждут от меня какого-то чуда.'],
  [,,'— Хорошо-хорошо, верю. Но мне и правда домой пора. У меня там кот некормленный.'],
  [,,'Девочка восторженно посмотрела на меня:'],
  [,,'—<i> Кот? С ушами и хвостом? А можно погладить?</i>'],
  [,,'Я вздохнул и поплелся в сторону своего дома.'],
  [,,'Только напротив магазина, я вспомнил, что он закрыт, чертыхнулся и направился домой.'],
  [,,'—<i> Эй!</i> - окликнула меня девочка.'],
  [,,'Она догнала меня и преградила путь.'],
  [,,'—<i> Ну чего тебе?</i>'],
  [,,'—<i> А как же кошачий корм?</i>'],
  [,,'—<i> Ты что, совсем дурная? Не видишь - закрыт магазин! Мне его что, ограбить?</i>'],
  [,'two_shade.jpg','Девочка взяла меня за руки и внезапно подалась вперед. Нет, не поцеловала, как бы возможно мне хотелось, её губы остановились напротив моего уха и она прошептала:'],
  [,,'—<i> Просто поверь!</i>'],
  [,,'Она отпрянула, внезапно улица передо мной осветилась желтыми огоньками, я резко оглянулся: магазин, который мгновенье назад был закрыт, приветливо подмигивал огоньками гирлянд в окнах. За ними явно ходили люди с тележками.'],
  [,,'Я обернулся, но на том месте, где только что стояла девочка с кошачьими ушками никого не было…'],
  ['theme1.mp3','alone_kot.jpg','Пускай я и встретил этот Новый год на пару со своим котом, но та хандра, которая охватила меня в последние дни, наконец-то прошла.'],
  [,,'Я часто захаживал в тот мак и в тот парк, надеясь, что когда-нибудь вновь встречу ту девочку.'],
  [,,'Ведь теперь я точно знал, что для того, чтобы с тобой случалось что-то хорошее, нужно верить, и тогда оно обязательно случится.'],
  [,,['Вовсе не плохая концовка.','С Новым годом!',''],'badEnd']
]

function getThirdElements(list) {
  return list.map(el => el[2]);
}

function modifyList(mainList, augmentingList) {
  if (mainList.length !== augmentingList.length) {
    throw new Error("Both lists must have the same length.");
  }

  for (let i = 0; i < mainList.length; i++) {
    mainList[i][2] = augmentingList[i];
  }

  console.log("Merging has finished without errors");
}

const scenesModificationRu = getThirdElements(scenesRu);
const choiceModificationsRu = {};
Object.keys(choicesRu).forEach((key) => {
  choiceModificationsRu[key] = getThirdElements(choicesRu[key]);
});
