# AngularjsWebSiteProject
<p>Projeyi çalıştırabilmek için node.js'in http-serverında ayağa kaldırmak zorunda kaldım çünkü angularjs'in route provider'ı  viewları getirirken CORS Policy'e takıldı
http-server'ı kurmak ve yüklemek için aşağıdaki adımları uygulayabilirsiniz.</p><br/>
  +node.js i yükleyiniz<br/>
  +Ardından cmd de "npm install http-server -g" komutu ile http-serveri yükleyiniz<br/>
  +Sonrasında projenizin bulunduğu dizinde serverı ayağa kalldırınız ex: "http-server C:\Users\DELL\Desktop\FrontendChallenge\dist"<br/>
  +Tarayıcıda aşağıdaki urller ile ayağa kalkmış uygulamayı görebilirsiniz<br/>
    http://192.168.237.1:8080 <br/>
    http://192.168.126.1:8080 <br/>
    http://192.168.0.105:8080 <br/>
    http://127.0.0.1:8080 <br/>

<p>
  Bu proje angularjs( Angular 1) javascript frameworku ile geliştirilmiştir temelde mimari olarak model-view-controller mantığına dayalı olarak çalışır. Js controller kodları sayfanın view'ı(html -css kısmı) tarayıcıda compile edilmeden önce çalışan kodlardır.Controller js kodları sayfada sunulacak verileri hazırlar ve bu veriler html tarafında "{{...}}" süslü parantezlemesiyle yorumlanırlar. Hangi sayfada hangi controllerın çalışacağını ilgili sayfanın başındaki ng-controller directivine yazılmış controller ismi ile belirleriz va ilgili html sayfanın sonunda ilgili controller js kodlarını <scrip> tagi ile import ederiz. İlave olarak main js te sayfa routeing kodlarını görebilirsin. Burada da hangi controller tetikllendiğinde hangi html page in çağırılacağını tanımlarız.
</p>
