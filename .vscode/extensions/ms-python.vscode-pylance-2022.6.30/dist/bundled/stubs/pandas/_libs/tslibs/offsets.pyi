from __future__ import annotations

from datetime import (
    datetime,
    timedelta,
)
from typing import (
    TYPE_CHECKING,
    Any,
    Collection,
    Literal,
    Tuple,
    TypeVar,
    Union,
    overload,
)

import numpy as np
from pandas._typing import npt

from .timedeltas import Timedelta

if TYPE_CHECKING:
    from pandas.core.indexes.datetimes import DatetimeIndex
_BaseOffsetT = TypeVar("_BaseOffsetT", bound="BaseOffset")
_DatetimeT = TypeVar("_DatetimeT", bound=datetime)
_TimedeltaT = TypeVar("_TimedeltaT", bound=timedelta)

_relativedelta_kwds: set[str]
prefix_mapping: dict[str, type]

class ApplyTypeError(TypeError): ...

class BaseOffset:
    n: int
    def __init__(self, n: int = ..., normalize: bool = ...) -> None: ...
    def __eq__(self, other) -> bool: ...
    def __ne__(self, other) -> bool: ...
    def __hash__(self) -> int: ...
    @property
    def kwds(self) -> dict: ...
    @property
    def base(self) -> BaseOffset: ...
    @overload
    def __add__(self, other: npt.NDArray[np.object_]) -> npt.NDArray[np.object_]: ...
    @overload
    def __add__(self: _BaseOffsetT, other: BaseOffset) -> _BaseOffsetT: ...
    @overload
    def __add__(self, other: _DatetimeT) -> _DatetimeT: ...
    @overload
    def __add__(self, other: _TimedeltaT) -> _TimedeltaT: ...
    @overload
    def __radd__(self, other: npt.NDArray[np.object_]) -> npt.NDArray[np.object_]: ...
    @overload
    def __radd__(self: _BaseOffsetT, other: BaseOffset) -> _BaseOffsetT: ...
    @overload
    def __radd__(self, other: _DatetimeT) -> _DatetimeT: ...
    @overload
    def __radd__(self, other: _TimedeltaT) -> _TimedeltaT: ...
    def __sub__(self: _BaseOffsetT, other: BaseOffset) -> _BaseOffsetT: ...
    @overload
    def __rsub__(self, other: npt.NDArray[np.object_]) -> npt.NDArray[np.object_]: ...
    @overload
    def __rsub__(self: _BaseOffsetT, other: BaseOffset) -> _BaseOffsetT: ...
    @overload
    def __rsub__(self, other: _DatetimeT) -> _DatetimeT: ...
    @overload
    def __rsub__(self, other: _TimedeltaT) -> _TimedeltaT: ...
    def __call__(self, other): ...
    @overload
    def __mul__(self, other: np.ndarray) -> np.ndarray: ...
    @overload
    def __mul__(self: _BaseOffsetT, other: int) -> _BaseOffsetT: ...
    @overload
    def __rmul__(self, other: np.ndarray) -> np.ndarray: ...
    @overload
    def __rmul__(self: _BaseOffsetT, other: int) -> _BaseOffsetT: ...
    def __neg__(self: _BaseOffsetT) -> _BaseOffsetT: ...
    def copy(self: _BaseOffsetT) -> _BaseOffsetT: ...
    def __repr__(self) -> str: ...
    @property
    def name(self) -> str: ...
    @property
    def rule_code(self) -> str: ...
    def freqstr(self) -> str: ...
    def apply_index(self, dtindex: "DatetimeIndex") -> "DatetimeIndex": ...
    def _apply_array(self, dtarr) -> None: ...
    def rollback(self, dt: datetime) -> datetime: ...
    def rollforward(self, dt: datetime) -> datetime: ...
    def is_on_offset(self, dt: datetime) -> bool: ...
    def __setstate__(self, state) -> None: ...
    def __getstate__(self): ...
    @property
    def nanos(self) -> int: ...
    def onOffset(self, dt: datetime) -> bool: ...
    def isAnchored(self) -> bool: ...
    def is_anchored(self) -> bool: ...

def _get_offset(name: str) -> BaseOffset: ...

class SingleConstructorOffset(BaseOffset):
    @classmethod
    def _from_name(cls, suffix=...): ...
    def __reduce__(self): ...

@overload
def to_offset(freq: None) -> None: ...
@overload
def to_offset(freq: timedelta | BaseOffset | str) -> BaseOffset: ...

class Tick(SingleConstructorOffset):
    def __init__(self, n: int = ..., normalize: bool = ...) -> None: ...
    @property
    def delta(self) -> Timedelta: ...
    @property
    def nanos(self) -> int: ...

def delta_to_tick(delta: timedelta) -> Tick: ...

class Day(Tick): ...
class Hour(Tick): ...
class Minute(Tick): ...
class Second(Tick): ...
class Milli(Tick): ...
class Micro(Tick): ...
class Nano(Tick): ...

class RelativeDeltaOffset(BaseOffset):
    def __init__(self, n: int = ..., normalize: bool = ..., **kwds: Any) -> None: ...

class BusinessMixin(SingleConstructorOffset):
    def __init__(
        self, n: int = ..., normalize: bool = ..., offset: timedelta = ...
    ): ...

class BusinessDay(BusinessMixin): ...

class BusinessHour(BusinessMixin):
    def __init__(
        self,
        n: int = ...,
        normalize: bool = ...,
        start: str | Collection[str] = ...,
        end: str | Collection[str] = ...,
        offset: timedelta = ...,
    ): ...

class WeekOfMonthMixin(SingleConstructorOffset): ...

class YearOffset(SingleConstructorOffset):
    def __init__(
        self, n: int = ..., normalize: bool = ..., month: int | None = ...
    ): ...

class BYearEnd(YearOffset): ...
class BYearBegin(YearOffset): ...
class YearEnd(YearOffset): ...
class YearBegin(YearOffset): ...

class QuarterOffset(SingleConstructorOffset):
    def __init__(
        self, n: int = ..., normalize: bool = ..., startingMonth: int | None = ...
    ) -> None: ...

class BQuarterEnd(QuarterOffset): ...
class BQuarterBegin(QuarterOffset): ...
class QuarterEnd(QuarterOffset): ...
class QuarterBegin(QuarterOffset): ...
class MonthOffset(SingleConstructorOffset): ...
class MonthEnd(MonthOffset): ...
class MonthBegin(MonthOffset): ...
class BusinessMonthEnd(MonthOffset): ...
class BusinessMonthBegin(MonthOffset): ...

class SemiMonthOffset(SingleConstructorOffset):
    def __init__(
        self, n: int = ..., normalize: bool = ..., day_of_month: int | None = ...
    ) -> None: ...

class SemiMonthEnd(SemiMonthOffset): ...
class SemiMonthBegin(SemiMonthOffset): ...

class Week(SingleConstructorOffset):
    def __init__(
        self, n: int = ..., normalize: bool = ..., weekday: int | None = ...
    ) -> None: ...

class WeekOfMonth(WeekOfMonthMixin): ...
class LastWeekOfMonth(WeekOfMonthMixin): ...

class FY5253Mixin(SingleConstructorOffset):
    def __init__(
        self,
        n: int = ...,
        normalize: bool = ...,
        weekday: int = ...,
        startingMonth: int = ...,
        variation: str = ...,
    ) -> None: ...

class FY5253(FY5253Mixin): ...
class FY5253Quarter(FY5253Mixin): ...
class Easter(SingleConstructorOffset): ...

class _CustomBusinessMonth(BusinessMixin):
    def __init__(
        self,
        n: int = ...,
        normalize: bool = ...,
        offset: timedelta = ...,
        holidays: None | list = ...,
    ): ...

class CustomBusinessDay(BusinessDay):
    def __init__(
        self,
        n: int = ...,
        normalize: bool = ...,
        offset: timedelta = ...,
        weekmask: str = ...,
    ): ...

class CustomBusinessHour(BusinessHour):
    def __init__(
        self,
        n: int = ...,
        normalize: bool = ...,
        start: str = ...,
        end: str = ...,
        offset: timedelta = ...,
        holidays: None | list = ...,
    ): ...

class CustomBusinessMonthEnd(_CustomBusinessMonth): ...
class CustomBusinessMonthBegin(_CustomBusinessMonth): ...
class DateOffset(RelativeDeltaOffset): ...

BDay = BusinessDay
BMonthEnd = BusinessMonthEnd
BMonthBegin = BusinessMonthBegin
CBMonthEnd = CustomBusinessMonthEnd
CBMonthBegin = CustomBusinessMonthBegin
CDay = CustomBusinessDay

def roll_qtrday(
    other: datetime, n: int, month: int, day_opt: str, modby: int
) -> int: ...

INVALID_FREQ_ERR_MSG: Literal["Invalid frequency: {0}"]

def shift_months(
    dtindex: npt.NDArray[np.int64], months: int, day_opt: str | None = ...
) -> npt.NDArray[np.int64]: ...

_offset_map: dict[str, BaseOffset]