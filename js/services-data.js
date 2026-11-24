const RH_CATEGORIES = [
  {
    key: "setem",
    title: "Əməyin mühafizəsi və SƏTƏM xidmətləri",
    shortLabel: "Əməyin mühafizəsi və SƏTƏM",
    banner: "assets/images/banner-setem.jpg",
    icon: "fa-solid fa-helmet-safety",
    tagline: "Təhlükəsiz iş mühiti – uğurlu fəaliyyətin əsasıdır",
    items: [
      {
        id: 1,
        code: "01",
        title: "01. Əməyin mühafizəsi sisteminin qurulması",
        summary: "Müəssisənin fəaliyyətinə uyğun idarəetmə sisteminin yaradılması, siyasət, əsasnamə, əmrlər və prosedurların hazırlanması.",
        image: "assets/images/hero-hse.jpg",
        purpose: "Müəssisədə əməyin mühafizəsi xidmətinin strukturunu formalaşdırmaq, vəzifə və məsuliyyətləri bölmək və qanunvericiliyə uyğun işlək idarəetmə mexanizmi qurmaq.",
        tasks: [
          "Müəssisənin fəaliyyətinə uyğun əməyin mühafizəsi idarəetmə sisteminin qurulması",
          "Əməyin mühafizəsinə dair əsasnamə, nizamnamə və siyasətlərin hazırlanması",
          "Müvafiq əmr və sərəncamların tərtib edilməsi",
          "Əməyin mühafizəsi üzrə təlimat və prosedurların hazırlanması",
          "Mövcud sənədlərin təhlili, yenilənməsi və sistemləşdirilməsi"
        ],
        documents: [
          "Əməyin mühafizəsi üzrə əsasnamə və nizamnamə",
          "Korporativ SƏTƏM siyasəti",
          "Təyinat və məsuliyyət bölgüsü əmrləri",
          "Daxili prosedur və idarəetmə qaydaları"
        ],
        result: "Müəssisədə dövlət tələblərinə tam cavab verən, sistemli və idarəolunan əməyin mühafizəsi strukturu formalaşdırılır."
      },
      {
        id: 2,
        code: "02",
        title: "02. Əməyin mühafizəsi sənədlərinin hazırlanması",
        summary: "Vəzifə və iş təlimatları, jurnallar, qeydiyyat formaları və digər zəruri sənədlərin işlənməsi.",
        image: "assets/images/setem-risk-assessment.jpg",
        purpose: "Müəssisənin bütün peşə və iş sahələri üzrə əməyin mühafizəsi sənədlərini qüvvədə olan normativ aktlara uyğun şəkildə hazırlamaq və sistemləşdirmək.",
        tasks: [
          "Peşə və vəzifələr üzrə əməyin mühafizəsi təlimatlarının hazırlanması",
          "İş yerləri və fəaliyyət istiqamətləri üzrə zəruri sənədləşmənin aparılması",
          "Təlimatlandırma və biliklərin yoxlanılması sənədlərinin hazırlanması",
          "Təhlükəsizlik üzrə qeydiyyat jurnalları və formaların tərtibi",
          "Müəssisənin fəaliyyətinə uyğun digər əməyin mühafizəsi sənədlərinin hazırlanması"
        ],
        documents: [
          "Peşə və vəzifələr üzrə əməyin mühafizəsi təlimatları",
          "Giriş, ilkin və dövri təlimatlandırma jurnalları",
          "Biliklərin yoxlanılması protokolları",
          "Qeydiyyat formaları və uçot jurnalları"
        ],
        result: "Müəssisə yoxlamalara tam hazır, səliqəli və qanunvericiliyə uyğun sənəd bazasına sahib olur."
      },
      {
        id: 3,
        code: "03",
        title: "03. Təhlükəsizlik və risklərin idarə edilməsi",
        summary: "Təhlükələrin müəyyən edilməsi, risklərin qiymətləndirilməsi, audit, yoxlama və texniki təhlükəsizlik üzrə dəstək.",
        image: "assets/images/about-engineer.jpg",
        purpose: "İş şəraitini və istehsalat proseslərini təhlil edərək təhlükələri vaxtında aşkarlamaq, riskləri qiymətləndirmək və qəza ehtimallarını minimuma endirmək.",
        tasks: [
          "İş şəraitinin və istehsalat proseslərinin təhlili",
          "Təhlükələrin müəyyən edilməsi və risklərin qiymətləndirilməsi",
          "Risklərin azaldılması üzrə tədbirlər planının hazırlanması",
          "İş yerlərində təhlükəsizlik yoxlamalarının və auditlərin aparılması",
          "Texniki təhlükəsizlik bəyannamələrinin hazırlanması",
          "Aşkarlanmış uyğunsuzluqların aradan qaldırılması üzrə praktiki tövsiyələrin verilməsi"
        ],
        documents: [
          "Risklərin qiymətləndirilməsi cədvəli və hesabatı",
          "Risklərin azaldılması üzrə tədbirlər planı",
          "Texniki təhlükəsizlik bəyannamələri",
          "Daxili təhlükəsizlik auditi aktları"
        ],
        result: "İş yerlərində potensial təhlükələr nəzarət altına alınır və müəssisə üçün praktiki təhlükəsizlik tədbirləri tətbiq olunur."
      },
      {
        id: 4,
        code: "04",
        title: "04. Yanğın təhlükəsizliyi və təxliyyə həlləri",
        summary: "Yanğın təhlükəsizliyi sənədləri, təxliyyə planları, fövqəladə hallara hazırlıq və yoxlamalar.",
        image: "assets/images/banner-setem.jpg",
        purpose: "Obyektlərdə yanğın risklərini müəyyən etmək, tələb olunan yanğın təhlükəsizliyi sənədlərini və təxliyyə planlarını hazırlamaq.",
        tasks: [
          "Yanğın təhlükəsizliyi üzrə zəruri sənədlərin hazırlanması",
          "Obyektlərdə yanğın risklərinin qiymətləndirilməsi",
          "Yanğın təhlükəsizliyi üzrə daxili qayda və təlimatların hazırlanması",
          "Təxliyyə və xilasetmə planlarının tərtib edilməsi",
          "Yanğın zamanı davranış qaydalarının və fövqəladə tədbirlərin müəyyənləşdirilməsi",
          "Yanğın təhlükəsizliyi üzrə yoxlamaların və məsləhət xidmətlərinin göstərilməsi"
        ],
        documents: [
          "Yanğın təhlükəsizliyi üzrə təlimatlar və daxili qaydalar",
          "Obyekt üzrə yanğın risklərinin təhlili sənədi",
          "Təxliyyə və xilasetmə planları",
          "Yanğın təhlükəsizliyi yoxlama jurnalları"
        ],
        result: "Obyektdə yanğın təhlükəsizliyi normalarına tam əməl olunur və fövqəladə hallarda təhlükəsiz təxliyyə təmin edilir."
      },
      {
        id: 5,
        code: "05",
        title: "05. Ekoloji sənədləşmə və izləmə",
        summary: "Ekoloji pasport, tullantı sənədləri, ətraf mühitə təsirin qiymətləndirilməsi və ekoloji sənədlərin yenilənməsi.",
        image: "assets/images/hero-consulting.jpg",
        purpose: "Müəssisənin ətraf mühitlə bağlı fəaliyyətini qanunvericiliyə uyğun sənədləşdirmək və ekoloji inventarlaşdırmanı sistemli aparmaq.",
        tasks: [
          "Ekoloji pasportun hazırlanması və yenilənməsi",
          "Ətraf mühitə təsirin qiymətləndirilməsi üzrə sənədləşmə",
          "Ekoloji rəy və müvafiq sənədlərin hazırlanması",
          "Təhlükəli tullantıların pasportlarının tərtibi",
          "Ekoloji inventarlaşdırmanın aparılması",
          "Ətraf mühitin mühafizəsi üzrə sənədlərin sistemləşdirilməsi və yenilənməsi"
        ],
        documents: [
          "Müəssisənin Ekoloji Pasportu",
          "Ətraf mühitə təsirin qiymətləndirilməsi sənədləri və ekoloji rəy",
          "Təhlükəli tullantıların pasportları",
          "Ekoloji inventarlaşdırma sənədləri"
        ],
        result: "Müəssisənin ekoloji sənədləşməsi normativ tələblərə tam uyğunlaşdırılır və davamlı yenilənir."
      },
      {
        id: 6,
        code: "06",
        title: "06. Mülki müdafiə və konsultativ dəstək",
        summary: "Mülki müdafiə planları, müvafiq sənədlər, fövqəladə hallar üzrə tədbirlər və davamlı məsləhət dəstəyi.",
        image: "assets/images/engineer-portrait.jpg",
        purpose: "Müəssisədə mülki müdafiə üzrə zəruri planlaşdırmanı təşkil etmək və gündəlik fəaliyyətdə davamlı təhlükəsizlik dəstəyi vermək.",
        tasks: [
          "Mülki müdafiə üzrə zəruri plan və sənədlərin hazırlanması",
          "Mülki müdafiə tədbirlərinin planlaşdırılması",
          "Müvafiq rüblük hesabatların hazırlanması",
          "Fövqəladə hallar zamanı fəaliyyət qaydalarının müəyyənləşdirilməsi",
          "Müəssisənin gündəlik fəaliyyətində əməyin mühafizəsi və təhlükəsizlik məsələləri üzrə davamlı məsləhət xidmətlərinin göstərilməsi"
        ],
        documents: [
          "Mülki müdafiə planları və tədbirlər proqramı",
          "Rüblük mülki müdafiə hesabatları",
          "Fövqəladə hallar zamanı davranış qaydaları"
        ],
        result: "Fövqəladə hallara hazırlıq tam təmin edilir və şirkət gündəlik əməliyyatlarda davamlı ekspert dəstəyi alır."
      }
    ]
  },
  {
    key: "huquq",
    title: "Hüquqi Xidmətlər",
    shortLabel: "Hüquqi Xidmətlər",
    banner: "assets/images/banner-legal.jpg",
    icon: "fa-solid fa-scale-balanced",
    tagline: "Hüquqi dəstək – biznesinizin təminatı",
    items: [
      {
        id: 1,
        code: "01",
        title: "01. Müqavilə hüququ və müqavilələrin hazırlanması",
        summary: "Alqı-satqı, xidmət, podrat, icarə və digər mülki-hüquqi müqavilələrin hazırlanması, hüquqi ekspertizası və razılaşdırılması.",
        image: "assets/images/about-legal.jpg",
        purpose: "Şirkətin bağladığı bütün müqavilələrdə hüquqi riskləri minimuma endirmək və tərəflərin öhdəliklərini dəqiq tənzimləmək.",
        tasks: [
          "Alqı-satqı, təchizat, xidmət, podrat və icarə müqavilələrinin hazırlanması",
          "Müqavilələrin hüquqi ekspertizasının aparılması",
          "Müqavilələrə əlavə və dəyişikliklərin hazırlanması",
          "Tərəflərin hüquq və öhdəliklərinin hüquqi qiymətləndirilməsi",
          "Müqavilə öhdəliklərinin icrası ilə bağlı hüquqi məsləhətlərin verilməsi",
          "Müqavilə risklərinin müəyyən edilməsi və hüquqi müdafiə mexanizmlərinin hazırlanması"
        ],
        documents: [
          "Alqı-satqı, xidmət, podrat və icarə müqavilələri",
          "Müqavilələrə əlavə və dəyişikliklər (əlavə sazişlər)",
          "Hüquqi ekspertiza rəyləri"
        ],
        result: "Şirkətin kommersiya münasibətləri hüquqi cəhətdən qorunur və mübahisə riskləri azaldılır."
      },
      {
        id: 2,
        code: "02",
        title: "02. Korporativ hüquq",
        summary: "Şirkətlərin yaradılması, dövlət qeydiyyatı, təsis sənədlərinin hazırlanması, nizamnamə kapitalı və iştirakçıların hüquqi münasibətlərinin tənzimlənməsi.",
        image: "assets/images/banner-legal.jpg",
        purpose: "Müəssisələrin yaradılması, təşkili və korporativ idarəetmə sənədlərinin qanunvericiliyə uyğun aparılmasını təmin etmək.",
        tasks: [
          "Hüquqi şəxslərin yaradılması və dövlət qeydiyyatı üzrə hüquqi dəstək",
          "Təsis sənədlərinin və nizamnamələrin hazırlanması",
          "Şirkətlərin yenidən təşkili və ləğvi üzrə hüquqi müşayiət",
          "Təsisçi və iştirakçılar arasındakı münasibətlərin hüquqi tənzimlənməsi",
          "Rəhbərliyin dəyişdirilməsi və korporativ qərarların sənədləşdirilməsi",
          "Filial və nümayəndəliklərin yaradılması üzrə hüquqi dəstək",
          "Korporativ idarəetmə sənədlərinin hazırlanması və hüquqi ekspertizası"
        ],
        documents: [
          "Şirkət nizamnaməsi və təsis sənədləri",
          "Təsisçi qərarları və ümumi yığıncaq protokolları",
          "Filial və nümayəndəlik sənədləri"
        ],
        result: "Korporativ struktur və təsis sənədləri tam qanuni əsaslarla rəsmiləşdirilir."
      },
      {
        id: 3,
        code: "03",
        title: "03. Əmək hüququ",
        summary: "Əmək müqavilələri, əmək münasibətlərinin rəsmiləşdirilməsi, əmək mübahisələri, intizam tədbirləri və əmək qanunvericiliyi üzrə hüquqi məsləhət.",
        image: "assets/images/hero-consulting.jpg",
        purpose: "İşəgötürən və işçi arasındakı münasibətlərin AR Əmək Məcəlləsinə tam uyğun qurulmasını təmin etmək.",
        tasks: [
          "Əmək münasibətlərinin hüquqi tənzimlənməsi",
          "Əmək müqavilələrinin və əlavələrinin hazırlanması və ekspertizası",
          "İşə qəbul və əmək müqaviləsinə xitam prosedurları üzrə hüquqi dəstək",
          "Kadr sənədlərinin qanunvericiliyə uyğunluğunun yoxlanılması",
          "İntizam tənbehlərinin tətbiqi və sənədləşdirilməsi üzrə hüquqi məsləhət",
          "Əmək mübahisələrinin həlli üzrə hüquqi müşayiət",
          "İşəgötürən və işçilərin hüquq və vəzifələri üzrə məsləhətlərin verilməsi"
        ],
        documents: [
          "Əmək müqavilələri və əlavələr",
          "İntizam və xitam sənədləri",
          "Kadr sənədlərinin hüquqi ekspertiza rəyləri"
        ],
        result: "Əmək münasibətlərində qanun pozuntularının və əmək mübahisələrinin qarşısı alınır."
      },
      {
        id: 4,
        code: "04",
        title: "04. Vergi və maliyyə hüququ",
        summary: "Vergi öhdəlikləri, vergi yoxlamaları, vergi orqanları ilə münasibətlər və maliyyə-hüquqi məsələlər üzrə məsləhət.",
        image: "assets/images/banner-finance.jpg",
        purpose: "Şirkətlərin vergi və maliyyə öhdəliklərini hüquqi baxımdan düzgün qiymətləndirmək və yoxlamalarda maraqlarını qorumaq.",
        tasks: [
          "Vergi qanunvericiliyi üzrə hüquqi məsləhətlərin verilməsi",
          "Vergi öhdəliklərinin hüquqi qiymətləndirilməsi",
          "Vergi yoxlamalarına hazırlıq və hüquqi müşayiət",
          "Vergi orqanlarının qərar və hərəkətlərindən şikayətlərin hazırlanması",
          "Vergi mübahisələrinin həlli üzrə hüquqi dəstək",
          "Maliyyə və vergi risklərinin hüquqi qiymətləndirilməsi"
        ],
        documents: [
          "Vergi riskləri üzrə hüquqi rəylər",
          "Vergi orqanlarına şikayət və etiraz məktubları",
          "Yoxlama müşayiət sənədləri"
        ],
        result: "Vergi və maliyyə riskləri vaxtında müəyyən edilir və şirkətin qanuni mövqeyi müdafiə olunur."
      },
      {
        id: 5,
        code: "05",
        title: "05. Mülki hüquq",
        summary: "Əmlak, mülkiyyət, öhdəliklər, borc münasibətləri, zərərin ödənilməsi və digər mülki-hüquqi məsələlərin həlli.",
        image: "assets/images/about-legal.jpg",
        purpose: "Daşınmaz və daşınar əmlak, mülkiyyət və mülki-hüquqi öhdəliklərlə bağlı məsələlərin hüquqi həllini təmin etmək.",
        tasks: [
          "Daşınmaz əmlakla bağlı hüquqi məsləhətlərin verilməsi",
          "Əmlakın alqı-satqısı və mülkiyyət hüququnun rəsmiləşdirilməsi üzrə hüquqi dəstək",
          "Əmlak bölgüsü və vərəsəlik məsələləri üzrə hüquqi xidmətlər",
          "Öhdəliklərin icrası və dəymiş zərərin ödənilməsi ilə bağlı hüquqi məsləhətlər",
          "Ailə və nikah münasibətləri üzrə hüquqi dəstək",
          "Mülki-hüquqi mübahisələrin həlli"
        ],
        documents: [
          "Əmlak və mülkiyyət sənədləri",
          "Mülki-hüquqi ərizə və razılaşmalar",
          "Öhdəlik və zərər tələbi sənədləri"
        ],
        result: "Mülki və əmlak münasibətləri üzrə hüquqlar etibarlı şəkildə rəsmiləşdirilir və qorunur."
      },
      {
        id: 6,
        code: "06",
        title: "06. Kommersiya mübahisələri və qanuni mənafelərin müdafiəsi",
        summary: "Tərəfdaşlar, təchizatçılar, podratçılar və müştərilərlə yaranan mübahisələrin hüquqi həlli, borcların və müqavilə öhdəliklərinin icrasının tələb edilməsi.",
        image: "assets/images/banner-legal.jpg",
        purpose: "Şirkətlərin sahibkarlıq fəaliyyətindən irəli gələn qanuni mənafelərini, debitor borclarını və müqavilə hüquqlarını qorumaq.",
        tasks: [
          "Şirkətlərin kommersiya və sahibkarlıq fəaliyyətindən irəli gələn hüquq və mənafelərinin müdafiəsi",
          "Tərəfdaşlar, təchizatçılar, podratçılar və sifarişçilər arasında yaranan mübahisələrin həlli",
          "Müqavilə öhdəliklərinin pozulması ilə bağlı hüquqi müdafiə",
          "Debitor borclarının tələb edilməsi və borcların hüquqi qaydada geri alınması",
          "Ödənilməmiş hesab-fakturalar və digər maliyyə öhdəlikləri üzrə hüquqi tədbirlərin görülməsi",
          "Müqavilə öhdəliklərinin pozulması nəticəsində dəymiş zərərin və itirilmiş mənfəətin tələb edilməsi",
          "Kommersiya mübahisələrinin məhkəməyəqədər həlli və danışıqların hüquqi müşayiəti"
        ],
        documents: [
          "Pretenziya və rəsmi tələb məktubları",
          "Borc və öhdəlik razılaşmaları",
          "Danışıq protokolları"
        ],
        result: "Kommersiya mübahisələri effektiv şəkildə həll olunur və şirkətin maliyyə maraqları qorunur."
      },
      {
        id: 7,
        code: "07",
        title: "07. Məhkəmələrdə təmsilçilik və hüquqi müdafiə",
        summary: "İddia və etiraz ərizələrinin, şikayətlərin hazırlanması, məhkəmə proseslərində qanunvericiliyin tələblərinə uyğun hüquqi təmsilçilik və icra mərhələsində dəstək.",
        image: "assets/images/about-legal.jpg",
        purpose: "Bütün məhkəmə instansiyalarında və qərarların icrası mərhələsində şirkətin peşəkar hüquqi müdafiəsini təmin etmək.",
        tasks: [
          "Kommersiya, mülki, əmək, korporativ, əmlak və vergi mübahisələri üzrə hüquqi dəstək",
          "İddia, etiraz, şikayət və pretenziya məktublarının hazırlanması",
          "Məhkəməyə müraciət üçün ərizə və digər prosessual sənədlərin hazırlanması",
          "Sübutların hüquqi qiymətləndirilməsi və müdafiə mövqeyinin formalaşdırılması",
          "Birinci instansiya, apellyasiya və kassasiya instansiyalarında hüquqi təmsilçilik",
          "Məhkəmə qərarlarının icrası prosesinin hüquqi müşayiəti",
          "Mübahisələrin alternativ və məhkəməyəqədər həlli yollarının tətbiqi"
        ],
        documents: [
          "İddia ərizələri və etirazlar",
          "Apellyasiya və kassasiya şikayətləri",
          "Prosessual vəsatətlər və icra sənədləri"
        ],
        result: "Məhkəmə proseslərində şirkətin hüquqi mövqeyi əsaslandırılmış şəkildə müdafiə olunur."
      },
      {
        id: 8,
        code: "08",
        title: "08. Hüquqi uyğunluq və risklərin idarə edilməsi",
        summary: "Müəssisədaxili hüquqi sənədlərin yoxlanılması, hüquqi risklərin müəyyən edilməsi, rəhbərliyə məsləhət və qanunvericiliyə uyğunluğun təmin edilməsinə dəstək.",
        image: "assets/images/hero-consulting.jpg",
        purpose: "Müəssisənin gündəlik fəaliyyətinin qüvvədə olan qanunvericiliyə tam uyğun aparılmasını və hüquqi risklərin qabaqlanmasını təmin etmək.",
        tasks: [
          "Müəssisənin fəaliyyətinin qanunvericiliyə uyğunluğunun hüquqi qiymətləndirilməsi",
          "Şirkətdaxili normativ və təşkilati sənədlərin hazırlanması",
          "Rəhbərlik tərəfindən qəbul edilən qərarların hüquqi ekspertizası",
          "Müəssisənin fəaliyyətində hüquqi risklərin müəyyən edilməsi və qiymətləndirilməsi",
          "Hüquqi pozuntuların və potensial mübahisələrin qarşısının alınması üzrə tövsiyələrin hazırlanması",
          "Şirkətin gündəlik fəaliyyəti ilə bağlı hüquqi məsləhətlərin verilməsi"
        ],
        documents: [
          "Hüquqi uyğunluq hesabatları",
          "Daxili normativ sənədlər və əmrlər",
          "Risklərin azaldılması üzrə tövsiyə sənədləri"
        ],
        result: "Şirkət daxilində hüquqi nizam-intizam güclənir və potensial cərimə riskləri azaldılır."
      }
    ]
  },
  {
    key: "hr",
    title: "İnsan Resurslarının İdarə Edilməsi və Kadr Uçotu Xidmətləri",
    shortLabel: "İnsan Resursları (HR)",
    banner: "assets/images/banner-hr.jpg",
    icon: "fa-solid fa-users",
    tagline: "Peşəkar HR dəstəyi – güclü komanda üçün",
    items: [
      {
        id: 1,
        code: "01",
        title: "01. HR proseslərinin təşkili və idarə edilməsi",
        summary: "Müəssisənin strukturuna uyğun insan resursları proseslərinin qurulması, işçi ehtiyaclarının müəyyənləşdirilməsi, vəzifə və ştat strukturunun hazırlanması, HR siyasət və qaydalarının işlənməsi.",
        image: "assets/images/banner-hr.jpg",
        purpose: "Şirkətin fəaliyyətinə uyğun sistemli HR idarəetmə mexanizmini və daxili qaydalarını qurmaq.",
        tasks: [
          "İnsan resurslarının idarə olunması proseslərinin təşkili və təkmilləşdirilməsi",
          "İşçi heyətinin idarə edilməsi üzrə məsləhət xidmətlərinin göstərilməsi",
          "Ştat strukturunun və ştat cədvəllərinin hazırlanması və yenilənməsi",
          "İşçilərin şəxsi işlərinin formalaşdırılması və aparılması",
          "İşçilərin məzuniyyət qrafiklərinin hazırlanması və uçotunun aparılması",
          "Kadr idarəetməsi üzrə daxili proseslərin və prosedurların hazırlanması"
        ],
        documents: [
          "Ştat strukturu və ştat cədvəli",
          "HR siyasəti və daxili prosedurlar",
          "Məzuniyyət qrafikləri"
        ],
        result: "Müəssisədə şəffaf, nizamlı və effektiv insan resursları idarəetmə sistemi formalaşır."
      },
      {
        id: 2,
        code: "02",
        title: "02. İşə qəbul və əmək münasibətlərinin rəsmiləşdirilməsi",
        summary: "İşçilərin seçilməsi və işə qəbul prosesinin təşkili, əmək müqavilələrinin hazırlanması, dəyişikliklərin və xitam prosedurlarının rəsmiləşdirilməsi, ƏMAS sistemində müvafiq əməliyyatların aparılması.",
        image: "assets/images/hero-consulting.jpg",
        purpose: "İşə qəbul, vəzifə/əməkhaqqı dəyişikliyi və xitam proseslərini ƏMAS sistemi daxil olmaqla tam elektron və qanuni şəkildə icra etmək.",
        tasks: [
          "ƏMAS informasiya sistemində ştat vahidlərinin yaradılması və ləğvi",
          "İşə qəbul və əmək müqavilələrinin elektron qaydada rəsmiləşdirilməsi",
          "Əmək müqavilələrinə dəyişikliklərin edilməsi",
          "Vəzifə və əməkhaqqı dəyişikliklərinin rəsmiləşdirilməsi",
          "Əmək müqaviləsinə xitam verilməsi prosesinin icrası",
          "Məzuniyyət, sosial məzuniyyət, ezamiyyət və avans əmrlərinin hazırlanması və ƏMAS-da işlənilməsi",
          "İşsizlikdən sığorta (İSB) üzrə məlumatların işlənməsi"
        ],
        documents: [
          "Elektron əmək müqavilələri və bildirişlər",
          "İşə qəbul, dəyişiklik və xitam əmrləri",
          "Məzuniyyət və ezamiyyət sənədləri"
        ],
        result: "Bütün əmək münasibətləri ƏMAS sistemində vaxtında və səhvsiz rəsmiləşdirilir."
      },
      {
        id: 3,
        code: "03",
        title: "03. Kadr sənədlərinin hazırlanması və idarə edilməsi",
        summary: "Əmək müqavilələri, əmrlər, vəzifə təlimatları, maddi məsuliyyət və məxfilik müqavilələri, aktlar, protokollar, arayışlar və digər kadr sənədlərinin hazırlanması.",
        image: "assets/images/about-legal.jpg",
        purpose: "Şirkətin kadr kargüzarlığını əmək qanunvericiliyinin tələblərinə uyğun tam sənəd paketi ilə təmin etmək.",
        tasks: [
          "Əmək müqavilələrinin və onlara əlavələrin hazırlanması",
          "Məxfilik və tam maddi məsuliyyət müqavilələrinin hazırlanması",
          "İşə qəbul, vəzifə dəyişikliyi, əməkhaqqı dəyişikliyi və xitam əmrlərinin hazırlanması",
          "Akt, protokol, xasiyyətnamə və arayışların hazırlanması",
          "İntizam tənbehlərinin və mükafatlandırma tədbirlərinin sənədləşdirilməsi",
          "Daxili intizam qaydalarının və kadr prosedurlarının hazırlanması"
        ],
        documents: [
          "Vəzifə təlimatları",
          "Məxfilik və tam maddi məsuliyyət müqavilələri",
          "Əmrlər, aktlar, protokollar, arayışlar və daxili intizam qaydaları"
        ],
        result: "Kadr sənədləşməsi tam sistemləşdirilir və hüquqi boşluqlar aradan qaldırılır."
      },
      {
        id: 4,
        code: "04",
        title: "04. Əməkhaqqı və iş vaxtının uçotu",
        summary: "Əməkhaqqının hesablanması üçün məlumatların hazırlanması, iş vaxtının uçotu, davamiyyətə nəzarət, aylıq tabel və məzuniyyət qrafiklərinin tərtibi.",
        image: "assets/images/banner-finance.jpg",
        purpose: "İş vaxtının, davamiyyətin və əməkhaqqı hesablanması üçün ilkin kadr məlumatlarının dəqiq uçotunu aparmaq.",
        tasks: [
          "Aylıq iş vaxtı tabelinin hazırlanması",
          "İş vaxtının uçotunun aparılması və davamiyyət məlumatlarının sistemləşdirilməsi",
          "Əməkhaqqı dəyişikliklərinin sənədləşdirilməsi",
          "Məzuniyyət və ezamiyyət məlumatlarının uçotunun aparılması",
          "İş vaxtından artıq iş, gecə işi və digər iş vaxtı göstəricilərinin uçotunun aparılması",
          "Əməkhaqqının hesablanması üçün zəruri ilkin məlumatların hazırlanması"
        ],
        documents: [
          "Aylıq iş vaxtı tabelləri",
          "Davamiyyət və məzuniyyət uçotu sənədləri",
          "Əməkhaqqı hesablanması üçün ilkin kadr məlumatları"
        ],
        result: "Əməkhaqqı hesablamaları üçün dəqiq, şəffaf və gecikməsiz kadr uçotu təmin olunur."
      },
      {
        id: 5,
        code: "05",
        title: "05. Sosial təminat və əmək qabiliyyətsizliyi sənədləşməsi",
        summary: "Məzuniyyətlərin, sosial ödənişlərin, müvəqqəti əmək qabiliyyətinin itirilməsi ilə bağlı sənədlərin və müvafiq müraciətlərin hazırlanması.",
        image: "assets/images/banner-hr.jpg",
        purpose: "Xəstəlik vərəqələri və sosial müavinətlər üzrə sənədləşməni elektron sistemlərə uyğun vaxtında hazırlamaq.",
        tasks: [
          "Xəstəlik vərəqələri üzrə sənədlərin işlənməsi",
          "Müvəqqəti əmək qabiliyyətinin itirilməsi ilə bağlı müavinət sənədlərinin hazırlanması",
          "Sosial və birdəfəlik müavinətlər üzrə sənədləşmə",
          "Müavinətlərin təyin edilməsi üçün zəruri sənədlərin hazırlanması",
          "Müvafiq elektron sistemlər vasitəsilə məlumatların və sənədlərin təqdim edilməsi",
          "Sosial təminat məsələləri üzrə işçilərə və işəgötürənə məsləhət xidmətlərinin göstərilməsi"
        ],
        documents: [
          "Xəstəlik vərəqələri üzrə sənədlər",
          "Müavinət müraciətləri və hesablaşma əsasları",
          "Sosial təminat sənədləri"
        ],
        result: "Sosial ödənişlər və müavinət müraciətləri qanunvericiliyə uyğun və vaxtında icra olunur."
      },
      {
        id: 6,
        code: "06",
        title: "06. Şəxsi işlərin formalaşdırılması və arxivləşdirmə",
        summary: "İşçilərin şəxsi işlərinin yaradılması və yenilənməsi, əmək fəaliyyəti ilə bağlı sənədlərin sistemləşdirilməsi, əmək kitabçalarının uçotu və kadr sənədlərinin arxivləşdirilməsi.",
        image: "assets/images/setem-risk-assessment.jpg",
        purpose: "Kadr arxivini və işçilərin şəxsi iş qovluqlarını qanunvericiliyə uyğun sistemləşdirmək və qorumaq.",
        tasks: [
          "İşçilərin şəxsi iş sənədlərinin toplanması və sistemləşdirilməsi",
          "Kadr sənədlərinin nümunələrinin hazırlanması",
          "Əmək kitabçalarının açılması və müvafiq qeydlərin aparılması",
          "Kadr sənədlərinin arxivləşdirilməsi və saxlanmasının təşkili",
          "İşçilərin şəxsi sənədlərinin və kadr arxivinin mütəmadi yenilənməsi",
          "Kadr sənədlərinin qanunvericiliyin tələblərinə uyğun saxlanılmasının təşkili"
        ],
        documents: [
          "İşçilərin şəxsi iş qovluqları",
          "Əmək kitabçalarının uçotu jurnalı",
          "Arxiv siyahıları və kadr sənəd nümunələri"
        ],
        result: "Bütün kadr sənədləri nizamlı arxivdə saxlanılır və istənilən yoxlamada dərhal əlçatan olur."
      }
    ],
    extraAudit: {
      title: "HR auditi və əmək qanunvericiliyinə uyğunluğun yoxlanılması",
      description: "Şirkətlərin mövcud HR idarəetmə sisteminin, kadr sənədlərinin və əmək münasibətlərinin kompleks təhlili həyata keçirilir. Audit zamanı mövcud çatışmazlıqlar, hüquqi risklər və qanunvericiliyin tələblərinə uyğun olmayan hallar müəyyən edilir, onların aradan qaldırılması üçün müvafiq tövsiyələr hazırlanır.",
      items: [
        "Şirkətin insan resursları idarəetmə sisteminin kompleks auditinin aparılması",
        "Kadr sənədlərinin Azərbaycan Respublikasının Əmək Məcəlləsinə uyğunluğunun yoxlanılması",
        "Əmək müqavilələrinin və onlara edilmiş dəyişikliklərin hüquqi ekspertizası",
        "İşə qəbul, vəzifə və əməkhaqqı dəyişiklikləri, əmək müqaviləsinə xitam proseslərinin yoxlanılması",
        "ƏMAS informasiya sistemində aparılan əməliyyatların düzgünlüyünün qiymətləndirilməsi",
        "Ştat strukturunun və ştat cədvəllərinin yoxlanılması",
        "Əmr, sərəncam, akt, protokol və digər kadr sənədlərinin təhlili",
        "İş vaxtının uçotu və aylıq tabel sənədlərinin yoxlanılması",
        "Əməkhaqqı, məzuniyyət və ezamiyyət sənədlərinin təhlili",
        "İşçilərin şəxsi işlərinin və kadr arxivinin yoxlanılması",
        "Daxili intizam qaydalarının və HR prosedurlarının qanunvericiliyə uyğunluğunun qiymətləndirilməsi",
        "Əmək qanunvericiliyinin pozulması ilə bağlı hüquqi və inzibati risklərin müəyyən edilməsi",
        "Əmək müfəttişliyi yoxlamalarına hazırlıq və mövcud sənədlərin yoxlanılması",
        "Aşkar edilmiş nöqsan və uyğunsuzluqların aradan qaldırılması üzrə tövsiyələrin hazırlanması",
        "HR sisteminin təkmilləşdirilməsi üçün tədbirlər planının hazırlanması",
        "Audit nəticələri üzrə yekun hesabatın hazırlanaraq rəhbərliyə təqdim edilməsi"
      ],
      modes: [
        {
          badge: "Aylıq xidmət",
          title: "HR Outsourcing – Kompleks kadr idarəetməsi",
          text: "Şirkətin kadr və əmək münasibətlərinin davamlı idarə olunması, sənədləşdirilməsi, ƏMAS əməliyyatlarının aparılması və HR proseslərinin müşayiət edilməsi."
        },
        {
          badge: "Birdəfəlik / layihə əsaslı xidmət",
          title: "HR Auditi",
          text: "Şirkətin mövcud HR sisteminin, kadr sənədlərinin və əmək münasibətlərinin yoxlanılması, hüquqi risklərin müəyyən edilməsi və çatışmazlıqların aradan qaldırılması üzrə tövsiyələrin hazırlanması."
        }
      ],
      note: "Qeyd: Aylıq HR xidmətlərinin həcmi şirkətin işçi sayına, fəaliyyət sahəsinə, əmək münasibətlərinin intensivliyinə və görüləcək işlərin miqyasına uyğun müəyyən edilir."
    }
  },
  {
    key: "maliyye",
    title: "Mühasibat və Vergi Xidmətləri",
    shortLabel: "Mühasibat və Vergi",
    banner: "assets/images/banner-finance.jpg",
    icon: "fa-solid fa-coins",
    tagline: "Dəqiq uçot – şəffaf maliyyə",
    items: [
      {
        id: 1,
        code: "01",
        title: "01. Mühasibat uçotunun təşkili və aparılması",
        summary: "Müəssisənin fəaliyyətinə uyğun mühasibat uçotunun qurulması və aparılması, ilkin uçot sənədlərinin işlənməsi, gəlir və xərclərin uçotu, maliyyə əməliyyatlarının qeydiyyatı və hesabatların hazırlanması.",
        image: "assets/images/banner-finance.jpg",
        purpose: "Müəssisədə mühasibat uçotunu qanunvericiliyə uyğun qurmaq, bütün maliyyə əməliyyatlarını dəqiq qeydiyyata almaq və sistemləşdirmək.",
        tasks: [
          "Mühasibat uçotunun qurulması və təkmilləşdirilməsi",
          "İlkin mühasibat sənədlərinin hazırlanması və işlənməsi",
          "Gəlir və xərclərin uçotunun aparılması",
          "Debitor və kreditor borclarının uçotu",
          "Bank və kassa əməliyyatlarının uçotu",
          "Əsas vəsaitlərin və mal-material ehtiyatlarının uçotu",
          "Aylıq, rüblük və illik maliyyə hesabatlarının hazırlanması"
        ],
        documents: [
          "İlkin mühasibat sənədləri",
          "Debitor-kreditor və anbar uçotu cədvəlləri",
          "Aylıq, rüblük və illik maliyyə hesabatları"
        ],
        result: "Müəssisənin bütün maliyyə dövriyyəsi şəffaf, dəqiq və nəzarət altında aparılır."
      },
      {
        id: 2,
        code: "02",
        title: "02. Vergi uçotu və hesabatlılıq",
        summary: "Vergi uçotunun aparılması, vergi bəyannamələrinin və digər məcburi hesabatların hazırlanması və təqdim edilməsi, vergi öhdəliklərinin hesablanması və vergi qanunvericiliyinə uyğunluğun təmin edilməsinə dəstək.",
        image: "assets/images/hero-consulting.jpg",
        purpose: "Vergi öhdəliklərini dəqiq hesablamaq, bəyannamələri vaxtında təqdim etmək və vergi risklərini minimuma endirmək.",
        tasks: [
          "Vergi uçotunun təşkili və aparılması",
          "Vergi bəyannamələrinin hazırlanması və təqdim edilməsi",
          "ƏDV, mənfəət, gəlir, sadələşdirilmiş vergi və digər vergi öhdəlikləri üzrə dəstək",
          "Vergi öhdəliklərinin hesablanması",
          "Vergi qanunvericiliyinə uyğunluğun qiymətləndirilməsi",
          "Vergi risklərinin müəyyən edilməsi və azaldılması"
        ],
        documents: [
          "ƏDV, mənfəət, gəlir və sadələşdirilmiş vergi bəyannamələri",
          "Vergi öhdəlikləri üzrə hesablaşma sənədləri",
          "Vergi uyğunluğu üzrə rəylər"
        ],
        result: "Vergi hesabatları vaxtında və düzgün təqdim olunur, cərimə riskləri aradan qaldırılır."
      },
      {
        id: 3,
        code: "03",
        title: "03. Əməkhaqqı və sosial ödənişlərin hesablanması",
        summary: "İşçilərin əməkhaqqının, məzuniyyət və digər ödənişlərin hesablanması, gəlir vergisi, sosial sığorta, işsizlikdən sığorta və icbari tibbi sığorta üzrə öhdəliklərin hesablanması və uçotu.",
        image: "assets/images/banner-hr.jpg",
        purpose: "Əməkhaqqı, məzuniyyət, müavinət və bütün məcburi dövlət tutulmalarının dəqiq hesablanmasını və hesabatlılığını təmin etmək.",
        tasks: [
          "Əməkhaqqının hesablanması",
          "Məzuniyyət və müavinətlərin hesablanması",
          "Əməkhaqqından tutulmaların və məcburi ödənişlərin hesablanması (gəlir vergisi, sosial, işsizlik və icbari tibbi sığorta)",
          "Əməkhaqqı üzrə vergi və sosial sığorta hesabatlarının hazırlanması",
          "Əmək münasibətləri ilə bağlı maliyyə sənədlərinin uçotu"
        ],
        documents: [
          "Əməkhaqqı hesablaşma cədvəlləri",
          "Məzuniyyət və müavinət hesablamaları",
          "Vergi və sosial sığorta hesabatları"
        ],
        result: "İşçilərə ödənişlər və dövlət büdcəsinə köçürmələr tam dəqiqliklə icra olunur."
      },
      {
        id: 4,
        code: "04",
        title: "04. Maliyyə hesabatlarının hazırlanması və təhlili",
        summary: "Maliyyə vəziyyəti, mənfəət və zərər, pul vəsaitlərinin hərəkəti üzrə hesabatların hazırlanması, maliyyə göstəricilərinin təhlili və rəhbərlik üçün müvafiq məlumatların təqdim edilməsi.",
        image: "assets/images/hero-consulting.jpg",
        purpose: "Rəhbərliyə biznes qərarları üçün real maliyyə mənzərəsini, gəlir-xərc və pul axını göstəricilərini təqdim etmək.",
        tasks: [
          "Müəssisənin maliyyə vəziyyətinin təhlili",
          "Gəlir və xərclərin optimallaşdırılması",
          "Pul vəsaitlərinin hərəkətinin təhlili",
          "Büdcə və maliyyə planlarının hazırlanması",
          "Rentabellik və maliyyə göstəricilərinin qiymətləndirilməsi",
          "Rəhbərlik üçün idarəetmə hesabatlarının hazırlanması"
        ],
        documents: [
          "Maliyyə vəziyyəti, mənfəət-zərər və pul axını hesabatları",
          "Büdcə və maliyyə planları",
          "Rəhbərlik üçün analitik idarəetmə hesabatları"
        ],
        result: "Rəhbərlik gəlirliliyi və xərcləri aydın görür, daha düzgün maliyyə qərarları qəbul edir."
      },
      {
        id: 5,
        code: "05",
        title: "05. Vergi yoxlamaları və audit üzrə dəstək",
        summary: "Vergi yoxlamalarına hazırlıq, tələb olunan maliyyə və mühasibat sənədlərinin sistemləşdirilməsi, vergi orqanlarının sorğularının cavablandırılmasına dəstək və aşkar edilmiş uyğunsuzluqların aradan qaldırılması üzrə məsləhət.",
        image: "assets/images/banner-finance.jpg",
        purpose: "Vergi yoxlamalarından əvvəl daxili uyğunluğu yoxlamaq və yoxlama prosesində şirkəti peşəkar müşayiət etmək.",
        tasks: [
          "Vergi yoxlaması öncəsi daxili uyğunluq yoxlamasının aparılması",
          "Vergi və maliyyə sənədlərinin təhlili və sistemləşdirilməsi",
          "Vergi bəyannamələrinin və hesablamalarının yoxlanılması",
          "Vergi orqanları tərəfindən aparılan yoxlamalar zamanı məsləhət və müşayiət xidmətləri",
          "Yoxlama nəticəsində müəyyən edilmiş uyğunsuzluqların aradan qaldırılması üzrə tövsiyələrin hazırlanması"
        ],
        documents: [
          "Daxili vergi uyğunluğu rəyi",
          "Sistemləşdirilmiş maliyyə və vergi sənədləri",
          "Vergi sorğularına rəsmi cavablar"
        ],
        result: "Müəssisə vergi yoxlamalarına tam hazır olur və uyğunsuzluqlar vaxtında aradan qaldırılır."
      },
      {
        id: 6,
        code: "06",
        title: "06. Mühasibat xidmətlərinin autsorsinqi",
        summary: "Müəssisənin mühasibat və vergi uçotunun müqavilə əsasında kənar xidmət kimi aparılması, dövri hesabatlılığın təmin edilməsi və gündəlik mühasibat əməliyyatlarının idarə olunması.",
        image: "assets/images/hero-consulting.jpg",
        purpose: "Şirkətin ştatda əlavə yük yaratmadan tam və ya qismən mühasibat və vergi fəaliyyətini peşəkar komandaya həvalə etmək.",
        tasks: [
          "Müəssisənin gündəlik mühasibat fəaliyyətinin kənardan idarə edilməsi",
          "Tam və ya qismən mühasibat xidmətlərinin göstərilməsi",
          "Mühasibat və vergi proseslərinin vahid sistem üzrə təşkili",
          "Hesabatların vaxtında hazırlanması və təqdim edilməsi",
          "Maliyyə sənədlərinin arxivləşdirilməsi və sistemləşdirilməsi"
        ],
        documents: [
          "Dövri mühasibat və vergi hesabatları",
          "Gündəlik əməliyyat və kassa-bank uçotu",
          "Arxivləşdirilmiş maliyyə sənədləri"
        ],
        result: "Şirkət sabit, fasiləsiz və etibarlı mühasibat xidməti ilə əməliyyat xərclərini optimallaşdırır."
      }
    ]
  }
];
