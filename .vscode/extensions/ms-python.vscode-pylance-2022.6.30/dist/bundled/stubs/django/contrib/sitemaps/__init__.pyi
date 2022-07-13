from datetime import datetime
from typing import Any, Dict, List, Optional, Sequence, Union

from django.contrib.sites.models import Site
from django.contrib.sites.requests import RequestSite
from django.core.paginator import Paginator
from django.db.models.base import Model
from django.db.models.query import QuerySet

PING_URL: str

class SitemapNotFound(Exception): ...

def ping_google(sitemap_url: Optional[str] = ..., ping_url: str = ..., sitemap_uses_https: bool = ...) -> None: ...

class Sitemap:
    limit: int = ...
    protocol: Optional[str] = ...
    i18n: bool = ...
    languages: Optional[Sequence[str]] = ...
    alternates: bool = ...
    x_default: bool = ...
    def items(self) -> Union[Sequence[Any], QuerySet[Any]]: ...
    def location(self, item: Model) -> str: ...
    @property
    def paginator(self) -> Paginator: ...
    def get_urls(
        self, page: Union[int, str] = ..., site: Optional[Union[Site, RequestSite]] = ..., protocol: Optional[str] = ...
    ) -> List[Dict[str, Any]]: ...

class GenericSitemap(Sitemap):
    priority: Optional[float] = ...
    changefreq: Optional[str] = ...
    queryset: QuerySet[Model] = ...
    date_field: Optional[str] = ...
    protocol: Optional[str] = ...
    def __init__(
        self,
        info_dict: Dict[str, Union[datetime, QuerySet[Model], str]],
        priority: Optional[float] = ...,
        changefreq: Optional[str] = ...,
        protocol: Optional[str] = ...,
    ) -> None: ...
    def lastmod(self, item: Model) -> Optional[datetime]: ...
    def items(self) -> QuerySet[Model]: ...