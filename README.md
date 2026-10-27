# Lucifer Connect

Тематический лендинг Lucifer Connect с GitHub Pages, доменом `lucifer-connect.ru` и ссылками на актуальные локальные сборки Android и Windows.

## Публикация

- Главная ветка: `main`
- Домен: `lucifer-connect.ru` через `CNAME`
- Деплой: GitHub Actions workflow `Deploy GitHub Pages`
- Фоновое изображение: стандартный artwork Lucifer Connect из основного репозитория приложения
- Актуальный деплой проверяется по workflow после каждого изменения `main`.

## Сборки

Кнопки загрузки используют постоянные адреса `releases/latest/download` этого репозитория: `lucifer-connect-android.apk` и `LuciferConnect.exe`. Контрольные суммы этих файлов находятся в `SHA256SUMS-latest.txt`. При выпуске новой версии ссылки и подписи на сайте менять не требуется.

Исходники приложений находятся отдельно в `Efreitor2001/vpn`. Каждый новый релиз должен содержать указанные постоянные имена, а также APK/EXE с номерами версий и `SHA256SUMS.txt` для встроенного механизма обновления клиентов.

