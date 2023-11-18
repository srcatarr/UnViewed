[Official version of this article in here](README.md)
# UnViewed

UnViewed (görülmediği gibi isimlendirilmedide) görme engellilere yardımcı olmak için öğretmenimin yardımıyla geliştirdiğim bir projedir. Proje, görme engellilerin lavabolarda zorluk yaşamadan yönlerini bulmaları için tasarlanmıştır.  
[![](https://visitor-badge.laobi.icu/badge?page_id=yaso09.unviewed)](#)

## Genel Bakış

Engellilere yardımcı olmak için sesli harita görevi gören bu platform, dört temel aşama ile çalışır;

![Çalışma Mantığı Şema](https://github.com/yaso09/UnViewed/assets/93262823/14be1df3-4432-4dd4-b737-f60e6509625e)

İkinci aşamada lavabo sahibine yönetici paneli sağlanır ve bu panelde lavabolarını ekleyebilir, kaldırabilir ve düzenleyebilir. Aynı zamanda platformda kendisine özgü bir profil oluşturup düzenleyebilir. Profil oluşturup düzenleme aşamasının marka bilincini güçlendireceği için lavabo sahiplerinin platformu kullanmaya teşvik edeceğini tahmin ediyorum.

Şu sistemlere sahip;
* Grabbing System (Lavabo haritasını nesneleri sürükleyerek oluşturuyor)
* Account System (Bir hesap sistemi sunuyor)
* Translator System (Platformun erişilebilirliğini arttırmak açısından çoklu dil desteği sunuyor)
* Uygulama (Çevrimdışı da çalışabilen tek bir HTML dosyası, bu dosya, uygulamanın QR kodu haritaya dönüştürdüğü yer)

### Katkıda Bulunmak

Projemize katkılarınız bizim için çok önemli! Ben her ne kadar bütün katkılara açık olsamda, proje bi'tek bana bağlı olmadığı için her bir çekme isteğini öğretmenimle birlikte değerlendirmem gerekir.

### Sponsorluk

GitHub'da projeme sponsor olmanız gerçekten çok güzel olur :) Sponsorluk gelirleri SSL TLS sertifikaları, DDoS koruması, alan adı kirası gibi işlere verilecektir. Bu projenin yanı sıra sponsorluk geliri benim için iyi olur sonuç olarak bende bir lise öğrencisiyim.  

Her ne kadar sponsorlukla veya çekme isteği ile katkıda bulunamayacak olsanız bile depoyu yıldızlayarak ve/veya çatallayarak da yardımcı olabilirsiniz.

### Lisans

Proje şimdilik Node.js ile kullanılan ISC lisansına sahip. (Bknz. [ISC Lisansı](LICENSE))

## Çalışma mantığını anlamak

### Başlangıç

Sunucuyu çalıştırmak için [Google Apps Script](https://script.google.com) kullanır. Apps Script, [Google SpreadSheets](https://docs.google.com/spreadsheets) tablosuna bağlanır ve verilere o tablo üzerinden işler. Yani Back-End'in çalışması için bir Google hesabına ihtiyacınız var. Front-End ise standart Node.js ve Express ile yazılmıştır. Kullanmak için [Vercel](https://vercel.com)'i öneririm.  

### Gerekli Teknolojiler

Bu projenin kullandığı temel teknolojiler şunları içerir:

* [Node.js](https://nodejs.org)
* [Express](https://expressjs.com)
* [Clasp](https://github.com/google/clasp)
* [Google Apps Script](https://script.google.com)
* [Google SpreadSheets](https://docs.google.com/spreadsheets)

## Geliştirmeye başlamak

Bi'bismillah çekelim. Öncelikle makinenizde Git kurulu olmalı.

    git clone https://github.com/yaso09/UnViewed.git
    cd UnViewed
    npm install

### Test Etmek

Test etmek için makinenizde Node.js olmalı.

    npm test

Program http://localhost:3000/ adresinden çalışmaya başlayacaktır.

## Kaliteli Kullanım
Ürünü kaliteli kullanma teknikleri (Şimdilik sadece Türkçe için)
* "/route" ve "/api" adresleri API'e bağlandığı için normalde görünürde olmayan özellikleri keşfedebilirsiniz. Örneğin gizlice koyduğum ve [GitHub Profilime](https://github.com/yaso09) atıf yapan "/source-code" sayfasını ben burada yazmasaydım ve bu adreslerde gezmeseydiniz ASLA BULAMAYACAKTINIZ!
* Çevrimdışı kullanım. Söylemeye gerek yok bile. Tabii ki çevrimiçi kullandığınız zaman sunucuya bağlanıp verileri çekebildiği için elektrikler kesik mi, sular kesik mi gibi sorulara cevap bulabilirsiniz.

# Burayı eğlencesine koymak istedim
https://github.com/yaso09/UnViewed/assets/93262823/2e096e82-6b04-4b55-96d3-363af58cf24e
