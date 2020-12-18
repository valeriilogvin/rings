let gulp         = require("gulp"),
    sass         = require("gulp-sass"),
    watch        = require("gulp-watch"),
    rigger       = require("gulp-rigger"),
    preFixer     = require("gulp-autoprefixer"),
    browserSync  = require('browser-sync'),
    del          = require('del'),
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    concat       = require('gulp-concat'),
    uglify       = require('gulp-uglifyjs'),
    imagemin     = require('gulp-imagemin'),
    pngquant     = require('imagemin-pngquant'),
    cache        = require('gulp-cache'),
    reload       = browserSync.reload;

// пути к файлам
var path = {

    build: {  // куда будет складывать готовые файлы после зборки
        html: 'build/',
        js: 'build/js',
        css: 'build/css',
        jsLibs: "build/js",
        cssLibs: "build/css",
        fonts: "build/fonts",
    },
    src: {
        html: "src/*html",
        js: "src/js/*.js",
        css: "src/css/main.scss",
        jsLibs: "src/js/libs/**/*.js",
        cssLibs: "src/css/libs/**/*.css",
        fonts: "src/fonts/**/*.woff"
    },
    watch: {  //  пути к файлам, за которыми будем следить
        html: "src/**/*.html",
        js: "src/js/**/*.js",
        css: "src/css/**/*.scss",
        jsLibs: "src/js/libs/**/*.js",
        cssLibs: "src/css/libs/**/*.css",
        fonts: "src/fonts/**/*.woff"
    }
};

// Static server
gulp.task('webserver', function() {
    browserSync.init({ // Выполняем browserSync
        server:{ // Определяем параметры сервера
            baseDir:'./build' // Директория для сервера
        },
        notify: false // Отключаем уведомления
    })
});


// сборка файлов
// сборка html
gulp.task("html:build", function() {
    return gulp.src(path.src.html)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.html))
        .pipe(reload({stream: true}));
});

// сборка js
gulp.task("js:build", function() {
    return gulp.src(path.src.js)
        .pipe(rigger())
        .pipe(gulp.dest(path.build.js))
        .pipe(reload({stream: true}));
});

// сборка fonts
gulp.task("fonts:build", function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
        .pipe(reload({stream: true}));
});

// сборка css
gulp.task("css:build", function() {
    return gulp.src(path.src.css)
        .pipe(sass())
        .pipe(preFixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
        .pipe(gulp.dest(path.build.css))
        .pipe(reload({stream: true}));
});

// сборка css-библиотек
gulp.task("cssLibs:build", function() {
    return gulp.src(path.src.cssLibs)
        .pipe(gulp.dest(path.build.cssLibs)) // Выгружаем в папку build/css
        .pipe(reload({stream: true})); // Обновляем css на странице при изменении
});

// сборка js-библиотек
gulp.task("jsLibs:build", function() {
    return gulp.src(path.src.jsLibs)
        .pipe(gulp.dest(path.build.jsLibs)) // Выгружаем в папку build/js как есть
        .pipe(reload({stream: true})); // Обновляем js на странице при изменении
});

// таск для сборки
gulp.task("build",
    gulp.parallel(
        "html:build",
        "css:build",
        "js:build",
        "fonts:build",
        "cssLibs:build",
        "jsLibs:build"
    )
);

// сборка js-библиотек
gulp.task("js.min", function() {
    return gulp.src(path.src.jsLibs)
        .pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest(path.build.jsLibs)) // Выгружаем в папку build/js
});

gulp.task("css.min", function() {
    return gulp.src(path.src.cssLibs)
        .pipe(cssnano()) // Сжимаем
        .pipe(gulp.dest(path.build.cssLibs)) // Выгружаем в папку build/css
        .pipe(concat('libs.min.css')) // Собираем их в кучу в новом файле libs.min.css
        .pipe(gulp.dest(path.build.cssLibs)) // Выгружаем в папку build/css
        .pipe(reload({stream: true})); // Обновляем css на странице при изменении
});

// оптимизация изображений
gulp.task('img', function (){ // оптимизация изображений
    return gulp.src('src/img/**/*')
    /*.pipe(cache(imagemin({
        intelaced: true,
        progressiveLazyLoad:true,
        svgPlugins:[{removeViewBox: false}],
        use: [pngquant()]
    })))*/
        .pipe(gulp.dest('build/img'));
});



// следим за изменениями
gulp.task('watch' , function () {
    gulp.watch([path.watch.css], { usePolling: true }, gulp.parallel('css:build'));
    gulp.watch([path.watch.html], { usePolling: true }, gulp.parallel('html:build'));
    gulp.watch([path.watch.fonts], { usePolling: true }, gulp.parallel('fonts:build'));
    gulp.watch([path.watch.js], { usePolling: true }, gulp.parallel('js:build'));
    gulp.watch([path.watch.jsLibs], { usePolling: true }, gulp.parallel('jsLibs:build'));
    gulp.watch([path.watch.cssLibs], { usePolling: true }, gulp.parallel('cssLibs:build'));
    gulp.watch('src/img/**/*', { usePolling: true }, gulp.parallel('img'));
});


// чистим папку build
gulp.task('clean', async function() {
    return del.sync('build'); // Удаляем папку build перед сборкой
});


// дефолтный таск
gulp.task('default', gulp.parallel("clean","img","build","webserver","watch"));