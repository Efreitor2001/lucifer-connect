# Lucifer Connect

Тематический лендинг Lucifer Connect с GitHub Pages, доменом `lucifer-connect.ru` и ссылками на актуальные сборки Android, Windows и Linux.

## Публикация

- Главная ветка: `main`
- Домен: `lucifer-connect.ru` через `CNAME`
- Деплой: GitHub Actions workflow `Deploy GitHub Pages`
- Фоновое изображение: стандартный artwork Lucifer Connect из основного репозитория приложения
- Актуальный деплой проверяется по workflow после каждого изменения `main`.

## Сборки

Кнопки загрузки используют постоянные адреса `releases/latest/download` этого репозитория: `lucifer-connect-android.apk`, `LuciferConnect.exe`, `lucifer-connect-linux-amd64.deb`, `lucifer-connect-linux-arm64.deb`, `lucifer-connect-linux-x86_64.tar.gz` и `lucifer-connect-linux-aarch64.tar.gz`. Контрольные суммы этих файлов находятся в `SHA256SUMS-latest.txt`. При выпуске новой версии ссылки и подписи на сайте менять не требуется.

Linux: основной формат — универсальный архив с установщиком для glibc, x64 и ARM64. Дополнительно .deb для Ubuntu/Debian. systemd необязателен, нужны PolicyKit и iproute2. Иконка пингвина `assets/linux.svg` повторяет красную обводку и толщину линий Android-иконки.

Исходники приложений находятся отдельно в `Efreitor2001/vpn`. Каждый новый релиз должен содержать указанные постоянные имена, а также APK/EXE с номерами версий и `SHA256SUMS.txt` для встроенного механизма обновления клиентов.

