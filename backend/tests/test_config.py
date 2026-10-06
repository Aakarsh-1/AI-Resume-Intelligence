import pytest
from pydantic import ValidationError

from app.config import Settings, get_settings


def test_default_settings():
    settings = Settings(_env_file=None)

    assert settings.app_name == "AI Resume Intelligence API"
    assert settings.app_version == "0.1.0"
    assert settings.app_env == "development"
    assert settings.debug is False


def test_environment_variable_override(monkeypatch):
    monkeypatch.setenv("APP_NAME", "Configuration Test")

    settings = Settings(_env_file=None)

    assert settings.app_name == "Configuration Test"


def test_invalid_debug_value_is_rejected(monkeypatch):
    monkeypatch.setenv("DEBUG", "not-a-boolean")

    with pytest.raises(ValidationError):
        Settings(_env_file=None)


def test_get_settings_returns_cached_settings():
    get_settings.cache_clear()

    first = get_settings()
    second = get_settings()

    assert first is second

    get_settings.cache_clear()