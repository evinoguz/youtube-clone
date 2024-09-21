# Youtube Clone

#### Kullanıcılar, videoları izleyebilir, videoya ait bilgilere, yorumlara ve benzeri video önerilerine erişilebilir.
#### Arama yaparak dilediği videoya ulaşabilir.
#### Menüler, kategorilere göre dinamik olarak tasarlandı.
#### Tailwindcss ile arayüz geliştirildi.
#### React projesinde, Vite.js kullanıldı. Web geliştirme sürecini hızlandırmak ve geliştiricilere daha verimli bir deneyim sunar.
#### YT-Api'ye [buradan](https://rapidapi.com/ytjar/api/yt-api) ulaşabilirsiniz.
## Gif

![](/public/youtube-clone.gif)

## Projenin Çalıştırılması
Projeyi indiriniz veya fork ediniz. 'Visual Studio Code' editörü ile projeyi açınız. 
```
git clone https://github.com/evinoguz/youtube-clone.git
```

Proje dizininde .env adında dosya oluşturunuz. Bu dosyada ortam değişkenlerini tanımlayınız.
```
VITE_API_KEY = yourApiKey
VITE_API_URL = https://yt-api.p.rapidapi.com
```

  Terminalde;
```
npm install

```
komutu ile projede kullanılan paketlerin yüklenmesini sağlar, ardından
```
npm run dev
```
komutunu ile proje ayağa kaldırılır.
