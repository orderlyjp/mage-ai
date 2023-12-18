(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2484],{59739:function(n,e,t){"use strict";var o=t(56669);function r(){}function u(){}u.resetWarningCache=r,n.exports=function(){function n(n,e,t,r,u,i){if(i!==o){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:u,resetWarningCache:r};return t.PropTypes=t,t}},47329:function(n,e,t){n.exports=t(59739)()},56669:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},85108:function(n,e,t){"use strict";t.d(e,{G8:function(){return m},SR:function(){return p},VR:function(){return l},_H:function(){return E},x8:function(){return d}});var o,r,u,i,c,a,l,s=t(82394),f=t(35058);!function(n){n.COLUMNS="columns",n.METRICS="metrics",n.NUMBER="number"}(l||(l={}));var _={noCode:[{label:function(){return"time column"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{label:function(){return"time interval"},options:[f.aE.ORIGINAL,f.aE.SECOND,f.aE.MINUTE,f.aE.HOUR,f.aE.DAY,f.aE.WEEK,f.aE.MONTH,f.aE.YEAR],uuid:f.Yg},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE}]},m=(o={},(0,s.Z)(o,f.oV.BAR_CHART,{noCode:[{label:function(){return"group by columns"},type:l.COLUMNS,uuid:f.eN},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE},{autoRun:!0,label:function(){return"chart style"},options:[f.JT.HORIZONTAL,f.JT.VERTICAL],uuid:f.R8},{autoRun:!0,label:function(){return"sort direction"},options:[null,f.MP.ASCENDING,f.MP.DESCENDING],uuid:f.$1}],code:[{label:function(){return"variable name of x-axis values"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of y-axis values"},monospace:!0,uuid:f.rj}]}),(0,s.Z)(o,f.oV.HISTOGRAM,{noCode:[{label:function(){return"number column for chart"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{autoRun:!0,label:function(){return"Number of buckets"},type:l.NUMBER,uuid:f.m7}],code:[{label:function(){return"variable name of values"},monospace:!0,uuid:f.a3}]}),(0,s.Z)(o,f.oV.LINE_CHART,{noCode:[{label:function(){return"group by columns"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE}],code:[{label:function(){return"variable name of x-axis values"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of y-axis values"},monospace:!0,uuid:f.rj},{label:function(){return"labels of lines in chart (comma separated)"},uuid:f.e}]}),(0,s.Z)(o,f.oV.PIE_CHART,{noCode:[{label:function(){return"column for chart"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{autoRun:!0,label:function(){return"Number of slices"},type:l.NUMBER,uuid:f.m7}],code:[{label:function(){return"variable name of values"},monospace:!0,uuid:f.a3}]}),(0,s.Z)(o,f.oV.TABLE,{noCode:[{label:function(){return"columns"},type:l.COLUMNS,uuid:f.eN},{label:function(){return"max number of rows"},type:l.NUMBER,uuid:f.PG}],code:[{label:function(){return"variable name of columns"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of rows"},monospace:!0,uuid:f.rj}]}),(0,s.Z)(o,f.oV.TIME_SERIES_BAR_CHART,_),(0,s.Z)(o,f.oV.TIME_SERIES_LINE_CHART,_),o),d=(r={},(0,s.Z)(r,f.oV.BAR_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),(0,s.Z)(e,f.R8,f.JT.VERTICAL),e},content:function(n){return"columns = df_1.columns\nx = df_1.columns[:7]\ny = [[v] for v in [len(df_1[col].unique()) for col in x]]\n"}}),(0,s.Z)(r,f.oV.HISTOGRAM,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.m7,10),(0,s.Z)(e,f.a3,"x"),e},content:function(n){return"columns = df_1.columns\ncol = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))[0]\nx = df_1[col]\n"}}),(0,s.Z)(r,f.oV.LINE_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),e},content:function(n){return"columns = df_1.columns\ncols = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))\nx = df_1[cols[0]]\ny = [df_1[cols[1]]]\n"}}),(0,s.Z)(r,f.oV.PIE_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.m7,7),(0,s.Z)(e,f.a3,"x"),e},content:function(n){return"x = df_1[df_1.columns[0]]"}}),(0,s.Z)(r,f.oV.TABLE,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.PG,10),(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),e},content:function(n){return"x = df_1.columns\ny = df_1.to_numpy()"}}),(0,s.Z)(r,f.oV.TIME_SERIES_BAR_CHART,{configuration:function(n){return(0,s.Z)({},f.Yg,f.aE.ORIGINAL)}}),(0,s.Z)(r,f.oV.TIME_SERIES_LINE_CHART,{configuration:function(n){return(0,s.Z)({},f.Yg,f.aE.ORIGINAL)}}),r),p=(a={},(0,s.Z)(a,f.oV.BAR_CHART,(u={},(0,s.Z)(u,f.a3,(function(){return"must be a list of booleans, dates, integers, floats, or strings."})),(0,s.Z)(u,f.rj,(function(){return"must be a list of lists containing integers or floats."})),u)),(0,s.Z)(a,f.oV.HISTOGRAM,(0,s.Z)({},f.a3,(function(){return"must be a list of integers or floats."}))),(0,s.Z)(a,f.oV.LINE_CHART,(i={},(0,s.Z)(i,f.a3,(function(){return"must be a list of integers or floats."})),(0,s.Z)(i,f.rj,(function(){return"must be a list of lists containing integers or floats. Each list is a single line in the chart."})),i)),(0,s.Z)(a,f.oV.PIE_CHART,(0,s.Z)({},f.a3,(function(){return"must be a list of booleans, dates, integers, floats, or strings."}))),(0,s.Z)(a,f.oV.TABLE,(c={},(0,s.Z)(c,f.a3,(function(){return"must be a list of strings."})),(0,s.Z)(c,f.rj,(function(){return"must be a list of lists containing booleans, dates, integers, floats, or strings."})),c)),a),E=[{label:function(){return"% of missing values"},widgetTemplate:function(n){var e,t=n.block;return{name:"missing values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.a3,"columns_with_mising_values"),(0,s.Z)(e,f.rj,"percentage_of_missing_values"),(0,s.Z)(e,f.R8,f.JT.HORIZONTAL),(0,s.Z)(e,f.$1,f.MP.DESCENDING),(0,s.Z)(e,"chart_type",f.oV.BAR_CHART),e),content:"number_of_rows = len(df_1.index)\ncolumns_with_mising_values = []\npercentage_of_missing_values = []\nfor col in df_1.columns:\n    missing = df_1[col].isna().sum()\n    if missing > 0:\n        columns_with_mising_values.append(col)\n        percentage_of_missing_values.append(100 * missing / number_of_rows)\n"}}},{label:function(){return"Unique values"},widgetTemplate:function(n){var e,t=n.block;return{name:"unique values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"number_of_unique_values"),(0,s.Z)(e,f.R8,f.JT.HORIZONTAL),(0,s.Z)(e,f.$1,f.MP.DESCENDING),(0,s.Z)(e,"chart_type",f.oV.BAR_CHART),e),content:"columns = df_1.columns\nnumber_of_unique_values = [df_1[col].nunique() for col in columns]\n"}}},{label:function(){return"Most frequent values"},widgetTemplate:function(n){var e,t=n.block;return{name:"most frequent values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"column_index"),(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"columns = ['mode value', 'frequency', '% of values']\n\ncolumn_index = []\nrows = []\nfor col in df_1.columns:\n    value_counts = df_1[col].value_counts()\n    if len(value_counts.index) == 0:\n        continue\n    column_value = value_counts.index[0]\n    value = value_counts[column_value]\n    number_of_rows = df_1[col].count()\n    column_index.append(col)\n    rows.append([\n        column_value,\n        f'{round(100 * value / number_of_rows, 2)}%',\n        value,\n      ])\n"}}},{label:function(){return"Summary overview"},widgetTemplate:function(n){var e,t=n.block;return{name:"summary overview for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"stats"),(0,s.Z)(e,f.a3,"headers"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"from mage_ai.data_cleaner.column_types.column_type_detector import infer_column_types\n\n\nheaders = ['value']\nstats = ['Columns', 'Rows']\nrows = [[len(df_1.columns)], [len(df_1.index)]]\n\ncol_counts = {}\nfor col, col_type in infer_column_types(df_1).items():\n    col_type_name = col_type.value\n    if not col_counts.get(col_type_name):\n        col_counts[col_type_name] = 0\n    col_counts[col_type_name] += 1\n\nfor col_type, count in sorted(col_counts.items()):\n    stats.append(f'# of {col_type}')\n    rows.append([count])\n"}}},{label:function(){return"Feature profiles"},widgetTemplate:function(n){var e,t=n.block;return{name:"feature profiles for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"stats"),(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"from mage_ai.data_cleaner.column_types.column_type_detector import infer_column_types\nimport statistics\n\n\ncolumns_and_types = infer_column_types(df_1).items()\ncolumns = [t[0] for t in columns_and_types]\nstats = ['Type', 'Missing values', 'Unique values', 'Min', 'Max', 'Mean', 'Median', 'Mode']\nrows = [[] for _ in stats]\n\nfor col, col_type in columns_and_types:\n    series = df_1[col]\n    min_value = None\n    max_value = None\n    mean = None\n    median = None\n\n    not_null = series[series.notnull()]\n\n    if col_type.value in ['number', 'number_with_decimals']:\n        count = len(not_null.index)\n        if count >= 1:\n            mean = round(not_null.sum() / count, 2)\n            median = sorted(not_null)[int(count / 2)]\n        min_value = round(series.min(), 2)\n        max_value = round(series.max(), 2)\n    else:\n        min_value = not_null.astype(str).min()\n        max_value = not_null.astype(str).max()\n\n    _, mode = sorted(\n      [(v, k) for k, v in not_null.value_counts().items()],\n      reverse=True,\n    )[0]\n\n    for idx, value in enumerate([\n        col_type.value,\n        len(series[series.isna()].index),\n        len(series.unique()),\n        min_value,\n        max_value,\n        mean,\n        median,\n        mode,\n    ]):\n      rows[idx].append(value)\n"}}}]},8454:function(n,e,t){"use strict";var o,r,u,i;t.d(e,{Q0:function(){return o},qs:function(){return r}}),function(n){n.ADD="add",n.AVERAGE="average",n.CLEAN_COLUMN_NAME="clean_column_name",n.COUNT="count",n.COUNT_DISTINCT="count_distinct",n.CUSTOM="custom",n.DIFF="diff",n.DROP_DUPLICATE="drop_duplicate",n.EXPAND_COLUMN="expand_column",n.EXPLODE="explode",n.FILTER="filter",n.FIRST="first",n.FIX_SYNTAX_ERRORS="fix_syntax_errors",n.GROUP="group",n.IMPUTE="impute",n.JOIN="join",n.LAST="last",n.LIMIT="limit",n.MAX="max",n.MEDIAN="median",n.MIN="min",n.MODE="mode",n.NORMALIZE="normalize",n.REFORMAT="reformat",n.REMOVE="remove",n.REMOVE_OUTLIERS="remove_outliers",n.SCALE="scale",n.SELECT="select",n.SHIFT_DOWN="shift_down",n.SHIFT_UP="shift_up",n.SORT="sort",n.STANDARDIZE="standardize",n.SUM="sum",n.UNION="union",n.UPDATE_TYPE="update_type",n.UPDATE_VALUE="update_value"}(o||(o={})),function(n){n.COLUMN="column",n.ROW="row"}(r||(r={})),function(n){n.NOT_APPLIED="not_applied",n.COMPLETED="completed"}(u||(u={})),function(n){n.FEATURE="feature"}(i||(i={}))},44425:function(n,e,t){"use strict";t.d(e,{$W:function(){return N},DA:function(){return b},GJ:function(){return O},HX:function(){return S},J8:function(){return g},L8:function(){return a},LE:function(){return E},Lk:function(){return I},Lq:function(){return A},M5:function(){return R},Q3:function(){return v},Qj:function(){return h},Ut:function(){return L},V4:function(){return M},VZ:function(){return C},dO:function(){return p},f2:function(){return Z},iZ:function(){return D},qC:function(){return T},t6:function(){return l},tf:function(){return d}});var o,r,u,i,c,a,l,s=t(75582),f=t(82394);function _(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function m(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?_(Object(t),!0).forEach((function(e){(0,f.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(a||(a={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(l||(l={}));var d,p=(o={},(0,f.Z)(o,l.MARKDOWN,"MD"),(0,f.Z)(o,l.PYTHON,"PY"),(0,f.Z)(o,l.R,"R"),(0,f.Z)(o,l.SQL,"SQL"),(0,f.Z)(o,l.YAML,"YAML"),o),E=(r={},(0,f.Z)(r,l.MARKDOWN,"Markdown"),(0,f.Z)(r,l.PYTHON,"Python"),(0,f.Z)(r,l.R,"R"),(0,f.Z)(r,l.SQL,"SQL"),(0,f.Z)(r,l.YAML,"YAML"),r);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(d||(d={}));var A,T=(u={},(0,f.Z)(u,d.CUSTOM,d.CUSTOM),(0,f.Z)(u,d.DBT,d.DBT),u),O=Object.entries(d).reduce((function(n,e){var t=(0,s.Z)(e,2),o=t[0],r=t[1];return m(m({},n),{},(0,f.Z)({},r,o))}),{}),R=[d.CALLBACK,d.CONDITIONAL,d.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(A||(A={}));var b,y,N=[d.CHART,d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],v=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN,d.TRANSFORMER],C=[d.DATA_EXPORTER,d.DATA_LOADER],g=[d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],S=[d.DATA_EXPORTER,d.DATA_LOADER,d.DBT,d.TRANSFORMER],h=[d.CHART,d.SCRATCHPAD,d.SENSOR,d.MARKDOWN],D=[d.CALLBACK,d.CHART,d.EXTENSION,d.SCRATCHPAD,d.MARKDOWN],I=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.SENSOR,d.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(b||(b={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(y||(y={}));var Z=[d.CUSTOM,d.DATA_EXPORTER,d.DATA_LOADER,d.TRANSFORMER],M=(i={},(0,f.Z)(i,d.CALLBACK,"Callback"),(0,f.Z)(i,d.CHART,"Chart"),(0,f.Z)(i,d.CONDITIONAL,"Conditional"),(0,f.Z)(i,d.CUSTOM,"Custom"),(0,f.Z)(i,d.DATA_EXPORTER,"Data exporter"),(0,f.Z)(i,d.DATA_LOADER,"Data loader"),(0,f.Z)(i,d.DBT,"DBT"),(0,f.Z)(i,d.EXTENSION,"Extension"),(0,f.Z)(i,d.GLOBAL_DATA_PRODUCT,"Global data product"),(0,f.Z)(i,d.MARKDOWN,"Markdown"),(0,f.Z)(i,d.SCRATCHPAD,"Scratchpad"),(0,f.Z)(i,d.SENSOR,"Sensor"),(0,f.Z)(i,d.TRANSFORMER,"Transformer"),i),L=[d.DATA_LOADER,d.TRANSFORMER,d.DATA_EXPORTER,d.SENSOR];c={},(0,f.Z)(c,d.DATA_EXPORTER,"DE"),(0,f.Z)(c,d.DATA_LOADER,"DL"),(0,f.Z)(c,d.SCRATCHPAD,"SP"),(0,f.Z)(c,d.SENSOR,"SR"),(0,f.Z)(c,d.MARKDOWN,"MD"),(0,f.Z)(c,d.TRANSFORMER,"TF")},35058:function(n,e,t){"use strict";t.d(e,{$1:function(){return E},BD:function(){return R},CK:function(){return P},ED:function(){return a},JJ:function(){return c},JT:function(){return L},MP:function(){return w},Mi:function(){return D},Mv:function(){return y},PG:function(){return s},Pi:function(){return I},R8:function(){return u},Sv:function(){return T},Tv:function(){return M},Yf:function(){return S},Yg:function(){return _},a3:function(){return d},aE:function(){return H},aZ:function(){return h},bE:function(){return f},bk:function(){return g},bn:function(){return j},c0:function(){return U},cH:function(){return A},e:function(){return l},eN:function(){return i},eW:function(){return N},m$:function(){return b},m7:function(){return r},mW:function(){return C},nq:function(){return v},oV:function(){return o},os:function(){return x},pA:function(){return Z},rj:function(){return p},sc:function(){return O},v8:function(){return m}});var o,r="buckets",u="chart_style",i="group_by",c="height",a="index",l="legend_labels",s="limit",f="metrics",_="time_interval",m="width_percentage",d="x",p="y",E="y_sort_order",A="data_provider",T="data_provider_database",O="data_provider_profile",R="data_provider_schema",b="data_provider_table",y="dbt_profile_target",N="dbt_project_name",v="export_write_policy",C="limit",g="unique_upstream_table_name",S="upstream_block_configuration",h="table_name",D="use_raw_sql",I="dbt",Z="command",M=[d,p];!function(n){n.BAR_CHART="bar chart",n.CUSTOM="custom",n.HISTOGRAM="histogram",n.LINE_CHART="line chart",n.PIE_CHART="pie chart",n.TABLE="table",n.TIME_SERIES_BAR_CHART="time series bar chart",n.TIME_SERIES_LINE_CHART="time series line chart"}(o||(o={}));var L,x,P=[o.BAR_CHART,o.HISTOGRAM,o.LINE_CHART,o.PIE_CHART,o.TABLE,o.TIME_SERIES_BAR_CHART,o.TIME_SERIES_LINE_CHART];!function(n){n.HORIZONTAL="horizontal",n.VERTICAL="vertical"}(L||(L={})),function(n){n.AVERAGE="average",n.COUNT="count",n.COUNT_DISTINCT="count_distinct",n.MAX="max",n.MEDIAN="median",n.MIN="min",n.MODE="mode",n.SUM="sum"}(x||(x={}));var w,H,j=[x.AVERAGE,x.COUNT,x.COUNT_DISTINCT,x.MAX,x.MEDIAN,x.MIN,x.MODE,x.SUM];function U(n){return"".concat(n.aggregation,"(").concat(n.column,")")}!function(n){n.ASCENDING="ascending",n.DESCENDING="descending"}(w||(w={})),function(n){n.DAY="day",n.HOUR="hour",n.MINUTE="minute",n.MONTH="month",n.ORIGINAL="original",n.SECOND="second",n.WEEK="week",n.YEAR="year"}(H||(H={}))},46732:function(n,e,t){"use strict";var o=t(82394),r=t(26304),u=(t(82684),t(50724)),i=t(70374),c=t(28598),a=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid","zIndex"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.children,t=n.items,o=n.open,l=n.onClickCallback,f=n.onClickOutside,_=n.parentRef,m=n.uuid,d=n.zIndex,p=(0,r.Z)(n,a),E=(0,c.jsxs)("div",{style:{position:"relative",zIndex:(f?3:2)+(d||0)},children:[(0,c.jsx)("div",{ref:_,children:e}),(0,c.jsx)(i.Z,s(s({},p),{},{items:t,onClickCallback:l,open:o,parentRef:_,uuid:m}))]});return f?(0,c.jsx)(u.Z,{onClickOutside:f,open:!0,children:E}):E}},85854:function(n,e,t){"use strict";var o,r,u,i,c,a,l,s,f=t(82394),_=t(26304),m=t(26653),d=t(38626),p=t(33591),E=t(44897),A=t(95363),T=t(61896),O=t(30160),R=t(70515),b=t(38276),y=t(28598),N=["children","condensed","inline","level","marketing","spacingBelow"];function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function C(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,f.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var g=(0,d.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," "," ",""],O.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.yellow&&"\n    color: ".concat((n.theme.accent||E.Z.accent).yellow,";\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(A.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(A.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(A.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(A.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(A.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(A.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "}),(function(n){return n.strikethrough&&"\n    text-decoration: line-through;\n  "})),S=d.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||E.Z.content).active,";\n  ")})),h=d.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],g,p.media.md(o||(o=(0,m.Z)(["\n    ","\n  "])),T.aQ),p.media.lg(r||(r=(0,m.Z)(["\n    ","\n  "])),T.aQ),p.media.xl(u||(u=(0,m.Z)(["\n    ","\n  "])),T.aQ)),D=d.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],g,T.MJ),I=d.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],g,p.media.xs(i||(i=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),p.media.sm(c||(c=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),p.media.md(a||(a=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),p.media.lg(l||(l=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI),p.media.xl(s||(s=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*R.iI,7*R.iI)),Z=d.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],g,T.BL),M=d.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],g),L=d.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],g),x=d.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],g),P=d.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],g,(function(n){return 1===n.level&&"\n    ".concat(T.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(T.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),w=function(n){var e,t=n.children,o=n.condensed,r=n.inline,u=n.level,i=n.marketing,c=n.spacingBelow,a=(0,_.Z)(n,N);r?e=P:0===Number(u)?e=h:1===Number(u)?e=i?I:D:2===Number(u)?e=Z:3===Number(u)?e=M:4===Number(u)?e=L:5===Number(u)&&(e=x);var l=(0,y.jsxs)(e,C(C({},a),{},{level:u,children:[c&&(0,y.jsx)(b.Z,{mb:o?2:3,children:t}),!c&&t]}));return r?l:(0,y.jsx)(S,{children:l})};w.defaultProps={level:3,weightStyle:6},e.Z=w},6943:function(n,e,t){"use strict";t.r(e);var o=t(77837),r=t(38860),u=t.n(r),i=t(39440),c=t(93808),a=t(28598);function l(){return(0,a.jsx)(i.Z,{uuid:"dashboard"})}l.getInitialProps=(0,o.Z)(u().mark((function n(){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",{});case 1:case"end":return n.stop()}}),n)}))),e.default=(0,c.Z)(l)},91162:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/block-layout",function(){return t(6943)}])},80022:function(n,e,t){"use strict";function o(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return o}})},15544:function(n,e,t){"use strict";function o(n){return o=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},o(n)}t.d(e,{Z:function(){return o}})},13692:function(n,e,t){"use strict";t.d(e,{Z:function(){return r}});var o=t(61049);function r(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&(0,o.Z)(n,e)}},93189:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var o=t(12539),r=t(80022);function u(n,e){if(e&&("object"===o(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,r.Z)(n)}},61049:function(n,e,t){"use strict";function o(n,e){return o=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},o(n,e)}t.d(e,{Z:function(){return o}})}},function(n){n.O(0,[2678,3662,1154,6639,1751,341,5896,2714,2631,4783,874,8264,5810,3859,976,9440,9774,2888,179],(function(){return e=91162,n(n.s=e);var e}));var e=n.O();_N_E=e}]);