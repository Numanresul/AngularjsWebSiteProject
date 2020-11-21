# AngularjsWebSiteProject
Projeyi çalıştırabilmek için node.js'in http-serverında ayağa kaldırmak zorunda kaldım çünkü angularjs'in route provider'ı  viewları getirirken CORS Policy'e takıldı
http-server'ı kurmak ve yüklemek için aşağıdaki adımları uygulayabilirsiniz.
  +node.js i yükleyiniz
  +Ardından cmd de "npm install http-server -g" komutu ile http-serveri yükleyiniz
  +Sonrasında projenizin bulunduğu dizinde serverı ayağa kalldırınız ex: "http-server C:\Users\DELL\Desktop\FrontendChallenge\dist"
  +Tarayıcıda aşağıdaki urller ile ayağa kalkmış uygulamayı görebilirsiniz
    http://192.168.237.1:8080
    http://192.168.126.1:8080
    http://192.168.0.105:8080
    http://127.0.0.1:8080

1)Tecrübemin bulunduğunu düşündüğüm teknolojiler olan angularjs ve css,html gibi diller ile geliştirme yaptım ve teknik olarak yine tecrübem bulunan mvc yapısını angularjs te uyguladım
2) Projenin mevcut halinde görsel ve performans iyileştirmeleri gerekebilir.
3) Neyi değiştirirdim hususunda ise sayfaya dış kaynaktan çekilen görselleri kullanıcıya sunmadan önce store edip kullanıcıya daha seri hizmet verirdim.
4)Daha fazla zamanı olsaydı loading sorunu ve responsive kusurlarını düzeltirdim.

NOT: Maalesef "loading" gösterimini gerçekleştiremedim main.js te yazmış olduğum directive her bir image load olduğunda tetikleniyor ve scopta sayım yapıyor fakat scopeta bulunan değer değişimi html de gizleme açma gibi bir etkiyi oluşturamıyor.Zaman bitince böyle sunmak zorunda kaldım size ve yine maalesefki dökümandaki "görsellere bağlı kalmak zorunda değilsizin tasarım kabiliyetlerinizi gösterebilirsiniz" açıklamanızıda en son gördüğüm için aynı sayfaları yazdım.
