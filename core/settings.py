from pathlib import Path
import os
import environ

env = environ.Env(
    DEBUG=(bool, True)
)
environ.Env.read_env()

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = env("SECRET_KEY")
DEBUG = env("DEBUG")

ALLOWED_HOSTS = env.list("ALLOWED_HOSTS_DEV")

# ============================
# APPS
# ============================
DJANGO_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
]

PROYECT_APPS = []

THIRD_PARTY_APPS = [
    'corsheaders',
    'rest_framework',
    'ckeditor',
    'ckeditor_uploader',
]

INSTALLED_APPS = DJANGO_APPS + PROYECT_APPS + THIRD_PARTY_APPS

# ============================
# CKEDITOR
# ============================
CKEDITOR_UPLOAD_PATH = "uploads/"

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': 'Custom',
        'toolbar_Custom': [
            ['Bold', 'Italic', 'Underline'],
            ['NumberedList', 'BulletedList'],
            ['Link', 'Unlink'],
            ['RemoveFormat', 'Source'],
        ],
    }
}

# ============================
# MIDDLEWARE
# ============================
MIDDLEWARE = [
    'corsheaders.middleware.CorsMiddleware',   # CORREGIDO
    'django.middleware.security.SecurityMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'core.urls'

# ============================
# TEMPLATES
# ============================
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [os.path.join(BASE_DIR, 'build')],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'core.wsgi.application'

# ============================
# BASE DE DATOS
# ============================

# Si DATABASE_URL está vacío → usa sqlite
if env("DATABASE_URL") == "":
    DATABASES = {
        "default": {
            'ENGINE': 'django.db.backends.sqlite3',
            'NAME': BASE_DIR / 'db.sqlite3',
        }
    }
else:
    DATABASES = {
        'default': env.db("DATABASE_URL")
    }

DATABASES['default']['ATOMIC_REQUESTS'] = True

# ============================
# STATIC & MEDIA
# ============================
STATIC_URL = '/static/'
STATIC_ROOT = BASE_DIR / "static"

MEDIA_URL = '/media/'
MEDIA_ROOT = BASE_DIR / "media"

STATICFILES_DIRS = [
    BASE_DIR / "build/static"
]

# ============================
# REST FRAMEWORK
# ============================
REST_FRAMEWORK = {
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticatedOrReadOnly'
    ]
}

# ============================
# CORS
# ============================
CORS_ORIGIN_WHITELIST = env.list("CORS_ORIGIN_WHITELIST_DEV")
CSFR_TRUSTED_ORIGINS = env.list("CSFR_TRUSTED_ORIGINS_DEV")

# PRODUCCIÓN
if not DEBUG:
    ALLOWED_HOSTS = env.list("ALLOWED_HOSTS_DEPLOY")
    CORS_ORIGIN_WHITELIST = env.list("CORS_ORIGIN_WHITELIST_DEPLOY")
    CSFR_TRUSTED_ORIGINS = env.list("CSFR_TRUSTED_ORIGINS_DEPLOY")
