(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7983],{17717:function(n){!function(){"use strict";var e={114:function(n){function e(n){if("string"!==typeof n)throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function t(n,e){for(var t,r="",o=0,i=-1,u=0,c=0;c<=n.length;++c){if(c<n.length)t=n.charCodeAt(c);else{if(47===t)break;t=47}if(47===t){if(i===c-1||1===u);else if(i!==c-1&&2===u){if(r.length<2||2!==o||46!==r.charCodeAt(r.length-1)||46!==r.charCodeAt(r.length-2))if(r.length>2){var a=r.lastIndexOf("/");if(a!==r.length-1){-1===a?(r="",o=0):o=(r=r.slice(0,a)).length-1-r.lastIndexOf("/"),i=c,u=0;continue}}else if(2===r.length||1===r.length){r="",o=0,i=c,u=0;continue}e&&(r.length>0?r+="/..":r="..",o=2)}else r.length>0?r+="/"+n.slice(i+1,c):r=n.slice(i+1,c),o=c-i-1;i=c,u=0}else 46===t&&-1!==u?++u:u=-1}return r}var r={resolve:function(){for(var n,r="",o=!1,i=arguments.length-1;i>=-1&&!o;i--){var u;i>=0?u=arguments[i]:(void 0===n&&(n=""),u=n),e(u),0!==u.length&&(r=u+"/"+r,o=47===u.charCodeAt(0))}return r=t(r,!o),o?r.length>0?"/"+r:"/":r.length>0?r:"."},normalize:function(n){if(e(n),0===n.length)return".";var r=47===n.charCodeAt(0),o=47===n.charCodeAt(n.length-1);return 0!==(n=t(n,!r)).length||r||(n="."),n.length>0&&o&&(n+="/"),r?"/"+n:n},isAbsolute:function(n){return e(n),n.length>0&&47===n.charCodeAt(0)},join:function(){if(0===arguments.length)return".";for(var n,t=0;t<arguments.length;++t){var o=arguments[t];e(o),o.length>0&&(void 0===n?n=o:n+="/"+o)}return void 0===n?".":r.normalize(n)},relative:function(n,t){if(e(n),e(t),n===t)return"";if((n=r.resolve(n))===(t=r.resolve(t)))return"";for(var o=1;o<n.length&&47===n.charCodeAt(o);++o);for(var i=n.length,u=i-o,c=1;c<t.length&&47===t.charCodeAt(c);++c);for(var a=t.length-c,l=u<a?u:a,s=-1,f=0;f<=l;++f){if(f===l){if(a>l){if(47===t.charCodeAt(c+f))return t.slice(c+f+1);if(0===f)return t.slice(c+f)}else u>l&&(47===n.charCodeAt(o+f)?s=f:0===f&&(s=0));break}var d=n.charCodeAt(o+f);if(d!==t.charCodeAt(c+f))break;47===d&&(s=f)}var m="";for(f=o+s+1;f<=i;++f)f!==i&&47!==n.charCodeAt(f)||(0===m.length?m+="..":m+="/..");return m.length>0?m+t.slice(c+s):(c+=s,47===t.charCodeAt(c)&&++c,t.slice(c))},_makeLong:function(n){return n},dirname:function(n){if(e(n),0===n.length)return".";for(var t=n.charCodeAt(0),r=47===t,o=-1,i=!0,u=n.length-1;u>=1;--u)if(47===(t=n.charCodeAt(u))){if(!i){o=u;break}}else i=!1;return-1===o?r?"/":".":r&&1===o?"//":n.slice(0,o)},basename:function(n,t){if(void 0!==t&&"string"!==typeof t)throw new TypeError('"ext" argument must be a string');e(n);var r,o=0,i=-1,u=!0;if(void 0!==t&&t.length>0&&t.length<=n.length){if(t.length===n.length&&t===n)return"";var c=t.length-1,a=-1;for(r=n.length-1;r>=0;--r){var l=n.charCodeAt(r);if(47===l){if(!u){o=r+1;break}}else-1===a&&(u=!1,a=r+1),c>=0&&(l===t.charCodeAt(c)?-1===--c&&(i=r):(c=-1,i=a))}return o===i?i=a:-1===i&&(i=n.length),n.slice(o,i)}for(r=n.length-1;r>=0;--r)if(47===n.charCodeAt(r)){if(!u){o=r+1;break}}else-1===i&&(u=!1,i=r+1);return-1===i?"":n.slice(o,i)},extname:function(n){e(n);for(var t=-1,r=0,o=-1,i=!0,u=0,c=n.length-1;c>=0;--c){var a=n.charCodeAt(c);if(47!==a)-1===o&&(i=!1,o=c+1),46===a?-1===t?t=c:1!==u&&(u=1):-1!==t&&(u=-1);else if(!i){r=c+1;break}}return-1===t||-1===o||0===u||1===u&&t===o-1&&t===r+1?"":n.slice(t,o)},format:function(n){if(null===n||"object"!==typeof n)throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof n);return function(n,e){var t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+r:t+n+r:r}("/",n)},parse:function(n){e(n);var t={root:"",dir:"",base:"",ext:"",name:""};if(0===n.length)return t;var r,o=n.charCodeAt(0),i=47===o;i?(t.root="/",r=1):r=0;for(var u=-1,c=0,a=-1,l=!0,s=n.length-1,f=0;s>=r;--s)if(47!==(o=n.charCodeAt(s)))-1===a&&(l=!1,a=s+1),46===o?-1===u?u=s:1!==f&&(f=1):-1!==u&&(f=-1);else if(!l){c=s+1;break}return-1===u||-1===a||0===f||1===f&&u===a-1&&u===c+1?-1!==a&&(t.base=t.name=0===c&&i?n.slice(1,a):n.slice(c,a)):(0===c&&i?(t.name=n.slice(1,u),t.base=n.slice(1,a)):(t.name=n.slice(c,u),t.base=n.slice(c,a)),t.ext=n.slice(u,a)),c>0?t.dir=n.slice(0,c-1):i&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};r.posix=r,n.exports=r}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}},u=!0;try{e[n](i,i.exports,r),u=!1}finally{u&&delete t[n]}return i.exports}r.ab="//";var o=r(114);n.exports=o}()},59739:function(n,e,t){"use strict";var r=t(56669);function o(){}function i(){}i.resetWarningCache=o,n.exports=function(){function n(n,e,t,o,i,u){if(u!==r){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function e(){return n}n.isRequired=n;var t={array:n,bigint:n,bool:n,func:n,number:n,object:n,string:n,symbol:n,any:n,arrayOf:e,element:n,elementType:n,instanceOf:e,node:n,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return t.PropTypes=t,t}},47329:function(n,e,t){n.exports=t(59739)()},56669:function(n){"use strict";n.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},85108:function(n,e,t){"use strict";t.d(e,{G8:function(){return m},SR:function(){return _},VR:function(){return l},_H:function(){return E},x8:function(){return p}});var r,o,i,u,c,a,l,s=t(82394),f=t(35058);!function(n){n.COLUMNS="columns",n.METRICS="metrics",n.NUMBER="number"}(l||(l={}));var d={noCode:[{label:function(){return"time column"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{label:function(){return"time interval"},options:[f.aE.ORIGINAL,f.aE.SECOND,f.aE.MINUTE,f.aE.HOUR,f.aE.DAY,f.aE.WEEK,f.aE.MONTH,f.aE.YEAR],uuid:f.Yg},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE}]},m=(r={},(0,s.Z)(r,f.oV.BAR_CHART,{noCode:[{label:function(){return"group by columns"},type:l.COLUMNS,uuid:f.eN},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE},{autoRun:!0,label:function(){return"chart style"},options:[f.JT.HORIZONTAL,f.JT.VERTICAL],uuid:f.R8},{autoRun:!0,label:function(){return"sort direction"},options:[null,f.MP.ASCENDING,f.MP.DESCENDING],uuid:f.$1}],code:[{label:function(){return"variable name of x-axis values"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of y-axis values"},monospace:!0,uuid:f.rj}]}),(0,s.Z)(r,f.oV.HISTOGRAM,{noCode:[{label:function(){return"number column for chart"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{autoRun:!0,label:function(){return"Number of buckets"},type:l.NUMBER,uuid:f.m7}],code:[{label:function(){return"variable name of values"},monospace:!0,uuid:f.a3}]}),(0,s.Z)(r,f.oV.LINE_CHART,{noCode:[{label:function(){return"group by columns"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{label:function(){return"metrics"},type:l.METRICS,uuid:f.bE}],code:[{label:function(){return"variable name of x-axis values"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of y-axis values"},monospace:!0,uuid:f.rj},{label:function(){return"labels of lines in chart (comma separated)"},uuid:f.e}]}),(0,s.Z)(r,f.oV.PIE_CHART,{noCode:[{label:function(){return"column for chart"},settings:{maxValues:1},type:l.COLUMNS,uuid:f.eN},{autoRun:!0,label:function(){return"Number of slices"},type:l.NUMBER,uuid:f.m7}],code:[{label:function(){return"variable name of values"},monospace:!0,uuid:f.a3}]}),(0,s.Z)(r,f.oV.TABLE,{noCode:[{label:function(){return"columns"},type:l.COLUMNS,uuid:f.eN},{label:function(){return"max number of rows"},type:l.NUMBER,uuid:f.PG}],code:[{label:function(){return"variable name of columns"},monospace:!0,uuid:f.a3},{label:function(){return"variable name of rows"},monospace:!0,uuid:f.rj}]}),(0,s.Z)(r,f.oV.TIME_SERIES_BAR_CHART,d),(0,s.Z)(r,f.oV.TIME_SERIES_LINE_CHART,d),r),p=(o={},(0,s.Z)(o,f.oV.BAR_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),(0,s.Z)(e,f.R8,f.JT.VERTICAL),e},content:function(n){return"columns = df_1.columns\nx = df_1.columns[:7]\ny = [[v] for v in [len(df_1[col].unique()) for col in x]]\n"}}),(0,s.Z)(o,f.oV.HISTOGRAM,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.m7,10),(0,s.Z)(e,f.a3,"x"),e},content:function(n){return"columns = df_1.columns\ncol = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))[0]\nx = df_1[col]\n"}}),(0,s.Z)(o,f.oV.LINE_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),e},content:function(n){return"columns = df_1.columns\ncols = list(filter(lambda x: df_1[x].dtype == float or df_1[x].dtype == int, columns))\nx = df_1[cols[0]]\ny = [df_1[cols[1]]]\n"}}),(0,s.Z)(o,f.oV.PIE_CHART,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.m7,7),(0,s.Z)(e,f.a3,"x"),e},content:function(n){return"x = df_1[df_1.columns[0]]"}}),(0,s.Z)(o,f.oV.TABLE,{configuration:function(n){var e;return e={},(0,s.Z)(e,f.PG,10),(0,s.Z)(e,f.a3,"x"),(0,s.Z)(e,f.rj,"y"),e},content:function(n){return"x = df_1.columns\ny = df_1.to_numpy()"}}),(0,s.Z)(o,f.oV.TIME_SERIES_BAR_CHART,{configuration:function(n){return(0,s.Z)({},f.Yg,f.aE.ORIGINAL)}}),(0,s.Z)(o,f.oV.TIME_SERIES_LINE_CHART,{configuration:function(n){return(0,s.Z)({},f.Yg,f.aE.ORIGINAL)}}),o),_=(a={},(0,s.Z)(a,f.oV.BAR_CHART,(i={},(0,s.Z)(i,f.a3,(function(){return"must be a list of booleans, dates, integers, floats, or strings."})),(0,s.Z)(i,f.rj,(function(){return"must be a list of lists containing integers or floats."})),i)),(0,s.Z)(a,f.oV.HISTOGRAM,(0,s.Z)({},f.a3,(function(){return"must be a list of integers or floats."}))),(0,s.Z)(a,f.oV.LINE_CHART,(u={},(0,s.Z)(u,f.a3,(function(){return"must be a list of integers or floats."})),(0,s.Z)(u,f.rj,(function(){return"must be a list of lists containing integers or floats. Each list is a single line in the chart."})),u)),(0,s.Z)(a,f.oV.PIE_CHART,(0,s.Z)({},f.a3,(function(){return"must be a list of booleans, dates, integers, floats, or strings."}))),(0,s.Z)(a,f.oV.TABLE,(c={},(0,s.Z)(c,f.a3,(function(){return"must be a list of strings."})),(0,s.Z)(c,f.rj,(function(){return"must be a list of lists containing booleans, dates, integers, floats, or strings."})),c)),a),E=[{label:function(){return"% of missing values"},widgetTemplate:function(n){var e,t=n.block;return{name:"missing values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.a3,"columns_with_mising_values"),(0,s.Z)(e,f.rj,"percentage_of_missing_values"),(0,s.Z)(e,f.R8,f.JT.HORIZONTAL),(0,s.Z)(e,f.$1,f.MP.DESCENDING),(0,s.Z)(e,"chart_type",f.oV.BAR_CHART),e),content:"number_of_rows = len(df_1.index)\ncolumns_with_mising_values = []\npercentage_of_missing_values = []\nfor col in df_1.columns:\n    missing = df_1[col].isna().sum()\n    if missing > 0:\n        columns_with_mising_values.append(col)\n        percentage_of_missing_values.append(100 * missing / number_of_rows)\n"}}},{label:function(){return"Unique values"},widgetTemplate:function(n){var e,t=n.block;return{name:"unique values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"number_of_unique_values"),(0,s.Z)(e,f.R8,f.JT.HORIZONTAL),(0,s.Z)(e,f.$1,f.MP.DESCENDING),(0,s.Z)(e,"chart_type",f.oV.BAR_CHART),e),content:"columns = df_1.columns\nnumber_of_unique_values = [df_1[col].nunique() for col in columns]\n"}}},{label:function(){return"Most frequent values"},widgetTemplate:function(n){var e,t=n.block;return{name:"most frequent values for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"column_index"),(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"columns = ['mode value', 'frequency', '% of values']\n\ncolumn_index = []\nrows = []\nfor col in df_1.columns:\n    value_counts = df_1[col].value_counts()\n    if len(value_counts.index) == 0:\n        continue\n    column_value = value_counts.index[0]\n    value = value_counts[column_value]\n    number_of_rows = df_1[col].count()\n    column_index.append(col)\n    rows.append([\n        column_value,\n        f'{round(100 * value / number_of_rows, 2)}%',\n        value,\n      ])\n"}}},{label:function(){return"Summary overview"},widgetTemplate:function(n){var e,t=n.block;return{name:"summary overview for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"stats"),(0,s.Z)(e,f.a3,"headers"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"from mage_ai.data_cleaner.column_types.column_type_detector import infer_column_types\n\n\nheaders = ['value']\nstats = ['Columns', 'Rows']\nrows = [[len(df_1.columns)], [len(df_1.index)]]\n\ncol_counts = {}\nfor col, col_type in infer_column_types(df_1).items():\n    col_type_name = col_type.value\n    if not col_counts.get(col_type_name):\n        col_counts[col_type_name] = 0\n    col_counts[col_type_name] += 1\n\nfor col_type, count in sorted(col_counts.items()):\n    stats.append(f'# of {col_type}')\n    rows.append([count])\n"}}},{label:function(){return"Feature profiles"},widgetTemplate:function(n){var e,t=n.block;return{name:"feature profiles for ".concat(null===t||void 0===t?void 0:t.uuid),configuration:(e={},(0,s.Z)(e,f.JJ,3e3),(0,s.Z)(e,f.ED,"stats"),(0,s.Z)(e,f.a3,"columns"),(0,s.Z)(e,f.rj,"rows"),(0,s.Z)(e,"chart_type",f.oV.TABLE),e),content:"from mage_ai.data_cleaner.column_types.column_type_detector import infer_column_types\nimport statistics\n\n\ncolumns_and_types = infer_column_types(df_1).items()\ncolumns = [t[0] for t in columns_and_types]\nstats = ['Type', 'Missing values', 'Unique values', 'Min', 'Max', 'Mean', 'Median', 'Mode']\nrows = [[] for _ in stats]\n\nfor col, col_type in columns_and_types:\n    series = df_1[col]\n    min_value = None\n    max_value = None\n    mean = None\n    median = None\n\n    not_null = series[series.notnull()]\n\n    if col_type.value in ['number', 'number_with_decimals']:\n        count = len(not_null.index)\n        if count >= 1:\n            mean = round(not_null.sum() / count, 2)\n            median = sorted(not_null)[int(count / 2)]\n        min_value = round(series.min(), 2)\n        max_value = round(series.max(), 2)\n    else:\n        min_value = not_null.astype(str).min()\n        max_value = not_null.astype(str).max()\n\n    _, mode = sorted(\n      [(v, k) for k, v in not_null.value_counts().items()],\n      reverse=True,\n    )[0]\n\n    for idx, value in enumerate([\n        col_type.value,\n        len(series[series.isna()].index),\n        len(series.unique()),\n        min_value,\n        max_value,\n        mean,\n        median,\n        mode,\n    ]):\n      rows[idx].append(value)\n"}}}]},8454:function(n,e,t){"use strict";var r,o,i,u;t.d(e,{Q0:function(){return r},qs:function(){return o}}),function(n){n.ADD="add",n.AVERAGE="average",n.CLEAN_COLUMN_NAME="clean_column_name",n.COUNT="count",n.COUNT_DISTINCT="count_distinct",n.CUSTOM="custom",n.DIFF="diff",n.DROP_DUPLICATE="drop_duplicate",n.EXPAND_COLUMN="expand_column",n.EXPLODE="explode",n.FILTER="filter",n.FIRST="first",n.FIX_SYNTAX_ERRORS="fix_syntax_errors",n.GROUP="group",n.IMPUTE="impute",n.JOIN="join",n.LAST="last",n.LIMIT="limit",n.MAX="max",n.MEDIAN="median",n.MIN="min",n.MODE="mode",n.NORMALIZE="normalize",n.REFORMAT="reformat",n.REMOVE="remove",n.REMOVE_OUTLIERS="remove_outliers",n.SCALE="scale",n.SELECT="select",n.SHIFT_DOWN="shift_down",n.SHIFT_UP="shift_up",n.SORT="sort",n.STANDARDIZE="standardize",n.SUM="sum",n.UNION="union",n.UPDATE_TYPE="update_type",n.UPDATE_VALUE="update_value"}(r||(r={})),function(n){n.COLUMN="column",n.ROW="row"}(o||(o={})),function(n){n.NOT_APPLIED="not_applied",n.COMPLETED="completed"}(i||(i={})),function(n){n.FEATURE="feature"}(u||(u={}))},41143:function(n,e,t){"use strict";var r;t.d(e,{V:function(){return r}}),function(n){n.CANCELLED="cancelled",n.COMPLETED="completed",n.FAILED="failed",n.INITIAL="initial",n.RUNNING="running",n.UPSTREAM_FAILED="upstream_failed",n.CONDITION_FAILED="condition_failed"}(r||(r={}))},44425:function(n,e,t){"use strict";t.d(e,{$W:function(){return g},DA:function(){return _},HX:function(){return v},J8:function(){return T},L8:function(){return c},LE:function(){return d},Lk:function(){return b},Lq:function(){return m},M5:function(){return p},Q3:function(){return A},Qj:function(){return O},Ut:function(){return C},V4:function(){return N},VZ:function(){return h},dO:function(){return f},f2:function(){return R},iZ:function(){return y},t6:function(){return a},tf:function(){return s}});var r,o,i,u,c,a,l=t(82394);!function(n){n.CONDITION="condition",n.DBT_SNAPSHOT="snapshot",n.DYNAMIC="dynamic",n.DYNAMIC_CHILD="dynamic_child",n.REDUCE_OUTPUT="reduce_output",n.REPLICA="replica"}(c||(c={})),function(n){n.MARKDOWN="markdown",n.PYTHON="python",n.R="r",n.SQL="sql",n.YAML="yaml"}(a||(a={}));var s,f=(r={},(0,l.Z)(r,a.MARKDOWN,"MD"),(0,l.Z)(r,a.PYTHON,"PY"),(0,l.Z)(r,a.R,"R"),(0,l.Z)(r,a.SQL,"SQL"),(0,l.Z)(r,a.YAML,"YAML"),r),d=(o={},(0,l.Z)(o,a.MARKDOWN,"Markdown"),(0,l.Z)(o,a.PYTHON,"Python"),(0,l.Z)(o,a.R,"R"),(0,l.Z)(o,a.SQL,"SQL"),(0,l.Z)(o,a.YAML,"YAML"),o);!function(n){n.CALLBACK="callback",n.CHART="chart",n.CONDITIONAL="conditional",n.CUSTOM="custom",n.DATA_EXPORTER="data_exporter",n.DATA_LOADER="data_loader",n.DBT="dbt",n.EXTENSION="extension",n.GLOBAL_DATA_PRODUCT="global_data_product",n.SCRATCHPAD="scratchpad",n.SENSOR="sensor",n.MARKDOWN="markdown",n.TRANSFORMER="transformer"}(s||(s={}));var m,p=[s.CALLBACK,s.CONDITIONAL,s.EXTENSION];!function(n){n.BLUE="blue",n.GREY="grey",n.PINK="pink",n.PURPLE="purple",n.TEAL="teal",n.YELLOW="yellow"}(m||(m={}));var _,E,g=[s.CHART,s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN,s.TRANSFORMER],A=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN,s.TRANSFORMER],h=[s.DATA_EXPORTER,s.DATA_LOADER],T=[s.DATA_EXPORTER,s.DATA_LOADER,s.TRANSFORMER],v=[s.DATA_EXPORTER,s.DATA_LOADER,s.DBT,s.TRANSFORMER],O=[s.CHART,s.SCRATCHPAD,s.SENSOR,s.MARKDOWN],y=[s.CALLBACK,s.CHART,s.EXTENSION,s.SCRATCHPAD,s.MARKDOWN],b=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.SENSOR,s.TRANSFORMER];!function(n){n.EXECUTED="executed",n.FAILED="failed",n.NOT_EXECUTED="not_executed",n.UPDATED="updated"}(_||(_={})),function(n){n.BLOCK_FILE="block_file",n.CUSTOM_BLOCK_TEMPLATE="custom_block_template",n.MAGE_TEMPLATE="mage_template"}(E||(E={}));var R=[s.CUSTOM,s.DATA_EXPORTER,s.DATA_LOADER,s.TRANSFORMER],N=(i={},(0,l.Z)(i,s.CALLBACK,"Callback"),(0,l.Z)(i,s.CHART,"Chart"),(0,l.Z)(i,s.CONDITIONAL,"Conditional"),(0,l.Z)(i,s.CUSTOM,"Custom"),(0,l.Z)(i,s.DATA_EXPORTER,"Data exporter"),(0,l.Z)(i,s.DATA_LOADER,"Data loader"),(0,l.Z)(i,s.DBT,"DBT"),(0,l.Z)(i,s.EXTENSION,"Extension"),(0,l.Z)(i,s.GLOBAL_DATA_PRODUCT,"Global data product"),(0,l.Z)(i,s.MARKDOWN,"Markdown"),(0,l.Z)(i,s.SCRATCHPAD,"Scratchpad"),(0,l.Z)(i,s.SENSOR,"Sensor"),(0,l.Z)(i,s.TRANSFORMER,"Transformer"),i),C=[s.DATA_LOADER,s.TRANSFORMER,s.DATA_EXPORTER,s.SENSOR];u={},(0,l.Z)(u,s.DATA_EXPORTER,"DE"),(0,l.Z)(u,s.DATA_LOADER,"DL"),(0,l.Z)(u,s.SCRATCHPAD,"SP"),(0,l.Z)(u,s.SENSOR,"SR"),(0,l.Z)(u,s.MARKDOWN,"MD"),(0,l.Z)(u,s.TRANSFORMER,"TF")},35058:function(n,e,t){"use strict";t.d(e,{$1:function(){return E},BD:function(){return T},CK:function(){return x},ED:function(){return a},JJ:function(){return c},JT:function(){return w},MP:function(){return P},Mi:function(){return S},Mv:function(){return O},PG:function(){return s},Pi:function(){return I},R8:function(){return i},Sv:function(){return A},Tv:function(){return M},Yf:function(){return C},Yg:function(){return d},a3:function(){return p},aE:function(){return H},aZ:function(){return D},bE:function(){return f},bk:function(){return N},bn:function(){return j},c0:function(){return k},cH:function(){return g},e:function(){return l},eN:function(){return u},eW:function(){return y},m$:function(){return v},m7:function(){return o},mW:function(){return R},nq:function(){return b},oV:function(){return r},os:function(){return L},pA:function(){return Z},rj:function(){return _},sc:function(){return h},v8:function(){return m}});var r,o="buckets",i="chart_style",u="group_by",c="height",a="index",l="legend_labels",s="limit",f="metrics",d="time_interval",m="width_percentage",p="x",_="y",E="y_sort_order",g="data_provider",A="data_provider_database",h="data_provider_profile",T="data_provider_schema",v="data_provider_table",O="dbt_profile_target",y="dbt_project_name",b="export_write_policy",R="limit",N="unique_upstream_table_name",C="upstream_block_configuration",D="table_name",S="use_raw_sql",I="dbt",Z="command",M=[p,_];!function(n){n.BAR_CHART="bar chart",n.CUSTOM="custom",n.HISTOGRAM="histogram",n.LINE_CHART="line chart",n.PIE_CHART="pie chart",n.TABLE="table",n.TIME_SERIES_BAR_CHART="time series bar chart",n.TIME_SERIES_LINE_CHART="time series line chart"}(r||(r={}));var w,L,x=[r.BAR_CHART,r.HISTOGRAM,r.LINE_CHART,r.PIE_CHART,r.TABLE,r.TIME_SERIES_BAR_CHART,r.TIME_SERIES_LINE_CHART];!function(n){n.HORIZONTAL="horizontal",n.VERTICAL="vertical"}(w||(w={})),function(n){n.AVERAGE="average",n.COUNT="count",n.COUNT_DISTINCT="count_distinct",n.MAX="max",n.MEDIAN="median",n.MIN="min",n.MODE="mode",n.SUM="sum"}(L||(L={}));var P,H,j=[L.AVERAGE,L.COUNT,L.COUNT_DISTINCT,L.MAX,L.MEDIAN,L.MIN,L.MODE,L.SUM];function k(n){return"".concat(n.aggregation,"(").concat(n.column,")")}!function(n){n.ASCENDING="ascending",n.DESCENDING="descending"}(P||(P={})),function(n){n.DAY="day",n.HOUR="hour",n.MINUTE="minute",n.MONTH="month",n.ORIGINAL="original",n.SECOND="second",n.WEEK="week",n.YEAR="year"}(H||(H={}))},46732:function(n,e,t){"use strict";var r=t(82394),o=t(26304),i=(t(82684),t(50724)),u=t(70374),c=t(28598),a=["children","items","open","onClickCallback","onClickOutside","parentRef","uuid","zIndex"];function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}e.Z=function(n){var e=n.children,t=n.items,r=n.open,l=n.onClickCallback,f=n.onClickOutside,d=n.parentRef,m=n.uuid,p=n.zIndex,_=(0,o.Z)(n,a),E=(0,c.jsxs)("div",{style:{position:"relative",zIndex:(f?3:2)+(p||0)},children:[(0,c.jsx)("div",{ref:d,children:e}),(0,c.jsx)(u.Z,s(s({},_),{},{items:t,onClickCallback:l,open:r,parentRef:d,uuid:m}))]});return f?(0,c.jsx)(i.Z,{onClickOutside:f,open:!0,children:E}):E}},85854:function(n,e,t){"use strict";var r,o,i,u,c,a,l,s,f=t(82394),d=t(26304),m=t(26653),p=t(38626),_=t(33591),E=t(44897),g=t(95363),A=t(61896),h=t(30160),T=t(70515),v=t(38276),O=t(28598),y=["children","condensed","inline","level","marketing","spacingBelow"];function b(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function R(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?b(Object(t),!0).forEach((function(e){(0,f.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var N=(0,p.css)([""," margin:0;"," "," "," "," "," "," "," "," "," "," "," "," ",""],h.IH,(function(n){return n.color&&"\n    color: ".concat(n.color,"\n  ")}),(function(n){return n.yellow&&"\n    color: ".concat((n.theme.accent||E.Z.accent).yellow,";\n  ")}),(function(n){return n.center&&"\n    text-align: center;\n  "}),(function(n){return!n.monospace&&0===Number(n.weightStyle)&&"\n    font-family: ".concat(g.iI,";\n  ")}),(function(n){return!n.monospace&&1===Number(n.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(n){return!n.monospace&&2===Number(n.weightStyle)&&"\n    font-family: ".concat(g.LX,";\n  ")}),(function(n){return!n.monospace&&3===Number(n.weightStyle)&&"\n    font-family: ".concat(g.ry,";\n  ")}),(function(n){return!n.monospace&&4===Number(n.weightStyle)&&"\n    font-family: ".concat(g.YC,";\n  ")}),(function(n){return!n.monospace&&5===Number(n.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return!n.monospace&&(6===Number(n.weightStyle)||n.bold)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return!n.monospace&&7===Number(n.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return!n.monospace&&8===Number(n.weightStyle)&&"\n    font-family: ".concat(g.nF,";\n  ")}),(function(n){return n.lineHeightAuto&&"\n    line-height: normal !important;\n  "})),C=p.default.div.withConfig({displayName:"Headline__HeadlineContainerStyle",componentId:"sc-12jzt2e-0"})(["",""],(function(n){return"\n    color: ".concat((n.theme.content||E.Z.content).active,";\n  ")})),D=p.default.h1.withConfig({displayName:"Headline__H1HeroStyle",componentId:"sc-12jzt2e-1"})([""," font-size:42px;line-height:56px;"," "," ",""],N,_.media.md(r||(r=(0,m.Z)(["\n    ","\n  "])),A.aQ),_.media.lg(o||(o=(0,m.Z)(["\n    ","\n  "])),A.aQ),_.media.xl(i||(i=(0,m.Z)(["\n    ","\n  "])),A.aQ)),S=p.default.h1.withConfig({displayName:"Headline__H1Style",componentId:"sc-12jzt2e-2"})([""," ",""],N,A.MJ),I=p.default.h1.withConfig({displayName:"Headline__H1MarketingStyle",componentId:"sc-12jzt2e-3"})([""," "," "," "," "," ",""],N,_.media.xs(u||(u=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),_.media.sm(c||(c=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),_.media.md(a||(a=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),_.media.lg(l||(l=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI),_.media.xl(s||(s=(0,m.Z)(["\n    font-size: ","px;\n    line-height: ","px;\n  "])),6*T.iI,7*T.iI)),Z=p.default.h2.withConfig({displayName:"Headline__H2Style",componentId:"sc-12jzt2e-4"})([""," ",""],N,A.BL),M=p.default.h3.withConfig({displayName:"Headline__H3Style",componentId:"sc-12jzt2e-5"})([""," font-size:24px;line-height:32px;"],N),w=p.default.h4.withConfig({displayName:"Headline__H4Style",componentId:"sc-12jzt2e-6"})([""," font-size:20px;line-height:28px;"],N),L=p.default.h5.withConfig({displayName:"Headline__H5Style",componentId:"sc-12jzt2e-7"})([""," font-size:18px;line-height:26px;"],N),x=p.default.span.withConfig({displayName:"Headline__SpanStyle",componentId:"sc-12jzt2e-8"})([""," "," "," "," ",""],N,(function(n){return 1===n.level&&"\n    ".concat(A.MJ,"\n  ")}),(function(n){return 2===n.level&&"\n    ".concat(A.BL,"\n  ")}),(function(n){return 3===n.level&&"\n    font-size: 24px;\n    line-height: 32px;\n  "}),(function(n){return 4===n.level&&"\n    font-size: 20px;\n    line-height: 28px;\n  "})),P=function(n){var e,t=n.children,r=n.condensed,o=n.inline,i=n.level,u=n.marketing,c=n.spacingBelow,a=(0,d.Z)(n,y);o?e=x:0===Number(i)?e=D:1===Number(i)?e=u?I:S:2===Number(i)?e=Z:3===Number(i)?e=M:4===Number(i)?e=w:5===Number(i)&&(e=L);var l=(0,O.jsxs)(e,R(R({},a),{},{level:i,children:[c&&(0,O.jsx)(v.Z,{mb:r?2:3,children:t}),!c&&t]}));return o?l:(0,O.jsx)(C,{children:l})};P.defaultProps={level:3,weightStyle:6},e.Z=P},91175:function(n,e,t){"use strict";t.r(e);var r=t(77837),o=t(82394),i=t(38860),u=t.n(i),c=t(82684),a=t(39440),l=t(75457),s=t(93808),f=t(35686),d=t(35058),m=t(44425),p=t(75399),_=t(46684),E=t(28795),g=t(41143),A=t(70515),h=t(81728),T=t(28598);function v(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function O(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?v(Object(t),!0).forEach((function(e){(0,o.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):v(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function y(n){var e=n.pipeline,t=null===e||void 0===e?void 0:e.uuid,r=f.ZP.pipelines.detail(t).data,i=(0,c.useMemo)((function(){return O(O({},null===r||void 0===r?void 0:r.pipeline),e)}),[r,e]),u=(0,c.useMemo)((function(){var n,e,r,i,u,c,a="Trigger active status",l=(0,h.kE)("".concat(a,"_").concat(t,"_").concat((0,h.Lo)())),s="Trigger types",f=(0,h.kE)("".concat(s,"_").concat(t,"_").concat((0,h.Lo)())),_="Trigger frequency",E=(0,h.kE)("".concat(_,"_").concat(t,"_").concat((0,h.Lo)())),A="Pipeline run status",T=(0,h.kE)("".concat(A,"_").concat(t,"_").concat((0,h.Lo)())),v="Pipeline runs daily",y=(0,h.kE)("".concat(v,"_").concat(t,"_").concat((0,h.Lo)())),b="Completed pipeline runs daily",R=(0,h.kE)("".concat(b,"_").concat(t,"_").concat((0,h.Lo)())),N="Failed pipeline runs daily",C=(0,h.kE)("".concat(N,"_").concat(t,"_").concat((0,h.Lo)())),D={pipeline_uuid:t,type:p.XO.PIPELINE_SCHEDULES},S={pipeline_uuid:t,type:p.XO.PIPELINE_RUNS},I={configuration:(n={},(0,o.Z)(n,d.eN,["execution_date"]),(0,o.Z)(n,d.bE,[{aggregation:d.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(n,d.Yg,d.aE.DAY),(0,o.Z)(n,"chart_type",d.oV.TIME_SERIES_LINE_CHART),n),data_source:S,type:m.tf.CHART};return{blocks:(c={},(0,o.Z)(c,l,{configuration:(e={},(0,o.Z)(e,d.eN,["status"]),(0,o.Z)(e,d.bE,[{aggregation:d.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(e,d.$1,d.MP.DESCENDING),(0,o.Z)(e,"chart_type",d.oV.BAR_CHART),e),data_source:D,name:a,type:m.tf.CHART,uuid:l}),(0,o.Z)(c,f,{configuration:(r={},(0,o.Z)(r,d.eN,["schedule_type"]),(0,o.Z)(r,"chart_type",d.oV.PIE_CHART),r),data_source:D,name:s,type:m.tf.CHART,uuid:f}),(0,o.Z)(c,E,{configuration:(i={},(0,o.Z)(i,d.eN,["schedule_interval"]),(0,o.Z)(i,d.bE,[{aggregation:d.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(i,d.$1,d.MP.DESCENDING),(0,o.Z)(i,"chart_style",d.JT.HORIZONTAL),(0,o.Z)(i,"chart_type",d.oV.BAR_CHART),i),data_source:D,name:_,type:m.tf.CHART,uuid:E}),(0,o.Z)(c,T,{configuration:(u={},(0,o.Z)(u,d.eN,["status"]),(0,o.Z)(u,d.bE,[{aggregation:d.os.COUNT_DISTINCT,column:"id"}]),(0,o.Z)(u,d.$1,d.MP.DESCENDING),(0,o.Z)(u,"chart_style",d.JT.HORIZONTAL),(0,o.Z)(u,"chart_type",d.oV.BAR_CHART),u),data_source:S,name:A,type:m.tf.CHART,uuid:T}),(0,o.Z)(c,y,O(O({},I),{},{name:v,uuid:y})),(0,o.Z)(c,R,O(O({},I),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(g.V.COMPLETED,"']\n"),name:b,uuid:R})),(0,o.Z)(c,C,O(O({},I),{},{content:"\n@data_source\ndef d(df):\n    return df[df['status'] == '".concat(g.V.FAILED,"']\n"),name:N,uuid:C})),c),layout:[[{block_uuid:l,width:1},{block_uuid:f,width:1},{block_uuid:E,width:2}],[{block_uuid:T,width:1},{block_uuid:y,width:2}],[{block_uuid:R,width:1},{block_uuid:C,width:1}]]}}),[t]);return(0,T.jsx)(l.Z,{breadcrumbs:[{label:function(){return"Dashboard"}}],pageName:E.M.DASHBOARD,pipeline:i,title:function(n){var e=n.name;return"".concat(e," dashboard")},uuid:"".concat(E.M.DASHBOARD,"_").concat(t),children:(0,T.jsx)(a.Z,{leftOffset:9*A.iI,pageBlockLayoutTemplate:u,topOffset:_.Mz,uuid:"pipelines/".concat(t,"/dashboard")})})}y.getInitialProps=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.query.pipeline,n.abrupt("return",{pipeline:{uuid:t}});case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),e.default=(0,s.Z)(y)},3917:function(n,e,t){"use strict";t.d(e,{A5:function(){return b},AY:function(){return R},BP:function(){return y},Cs:function(){return I},JX:function(){return O},OC:function(){return d},Pc:function(){return N},Ro:function(){return C},Tz:function(){return v},XG:function(){return h},Y_:function(){return S},d$:function(){return A},jV:function(){return D},lE:function(){return p},lJ:function(){return Z},n$:function(){return T},n1:function(){return _},s8:function(){return s},vk:function(){return i},yD:function(){return f},yd:function(){return g}});var r,o,i,u=t(82394),c=t(92083),a=t.n(c),l=t(86735);!function(n){n.TODAY="today",n.WEEK="week",n.MONTH="month"}(i||(i={}));var s=(r={},(0,u.Z)(r,i.TODAY,"today"),(0,u.Z)(r,i.WEEK,"last 7 days"),(0,u.Z)(r,i.MONTH,"last 30 days"),r),f=(o={},(0,u.Z)(o,i.TODAY,0),(0,u.Z)(o,i.WEEK,6),(0,u.Z)(o,i.MONTH,29),o),d="YYYY-MM-DD HH:mm:ss",m="YYYY-MM-DD HH:mm",p="YYYY-MM-DD HH:mmZ",_="YYYY-MM-DD",E="MMMM D, YYYY",g=Intl.DateTimeFormat().resolvedOptions().timeZone;function A(n,e){var t=e||{},r=t.dayAgo,o=t.includeSeconds,i=t.utcFormat,u=a()(n),c=m;return i&&(u=u.utc()),r&&(u=u.subtract(1,"days")),o&&(c=d),u.format(c)}function h(n,e){return e?a().utc(n).local().format():n}function T(n){return a().utc(n).local().toDate()}function v(n){var e=A((new Date).toISOString(),{includeSeconds:!0,utcFormat:!0});return null!==n&&void 0!==n&&n.dateObj?new Date(e):e}function O(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return a().unix(n).format(null!==e&&void 0!==e&&e.withSeconds?d:m)}function y(n,e,t){return a()(n).utc().hours(+e).minutes(+t).format()}function b(n){return a()(n).unix()}function R(n,e,t,r){var o="".concat(n.toISOString().split("T")[0]," ").concat(e,":").concat(t);return r?"".concat(o,":").concat(r):o}function N(n){var e=a().unix(+n).utc();return{date:e.toDate(),hour:String(e.hour()),minute:String(e.minute())}}function C(n,e){var t=a().utc(),r=a().utc();null!==e&&void 0!==e&&e.localTime&&(t=a()().local(),r=a()().local());var o=(t=t.subtract(n,"days")).format(E),i=r.format(E);return null!==e&&void 0!==e&&e.endDateOnly?i:"".concat(o," - ").concat(i)}function D(n,e){var t=null!==e&&void 0!==e&&e.localTime?a()().local():a().utc();if(n===i.WEEK){var r=f[i.WEEK];t=t.subtract(r,"days")}else if(n===i.MONTH){var o=f[i.MONTH];t=t.subtract(o,"days")}return null!==e&&void 0!==e&&e.isoString?t.startOf("day").toISOString():t.startOf("day").format(d)}function S(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:90,e=new Date,t=[],r=0;r<n;r++)t.unshift(e.toISOString().split("T")[0]),e.setDate(e.getDate()-1);return t}function I(){var n=new Date,e=String(n.getMonth()+1).padStart(2,"0"),t=n.getFullYear(),r=a()("".concat(t,"-").concat(e),"YYYY-MM").daysInMonth();return(0,l.m5)(r,1)}function Z(n){return n.padStart(2,"0")}},81728:function(n,e,t){"use strict";t.d(e,{RA:function(){return d},kC:function(){return m},vg:function(){return T},kE:function(){return N},Mp:function(){return p},Pb:function(){return s},HW:function(){return O},wX:function(){return _},x6:function(){return E},_6:function(){return g},zf:function(){return v},Y6:function(){return b},Lo:function(){return R},wE:function(){return C},J3:function(){return A},We:function(){return f},QV:function(){return y},C5:function(){return h}});var r=t(75582),o=t(17717),i=["aged","ancient","autumn","billowing","bitter","black","blue","bold","broken","cold","cool","crimson","damp","dark","dawn","delicate","divine","dry","empty","falling","floral","fragrant","frosty","green","hidden","holy","icy","late","lingering","little","lively","long","misty","morning","muddy","nameless","old","patient","polished","proud","purple","quiet","red","restless","rough","shy","silent","small","snowy","solitary","sparkling","spring","still","summer","throbbing","twilight","wandering","weathered","white","wild","winter","wispy","withered","young"],u=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],c=(t(92083),["bird","breeze","brook","bush","butterfly","cherry","cloud","darkness","dawn","dew","dream","dust","feather","field","fire","firefly","flower","fog","forest","frog","frost","glade","glitter","grass","haze","hill","lake","leaf","meadow","moon","morning","mountain","night","paper","pine","pond","rain","resonance","river","sea","shadow","shape","silence","sky","smoke","snow","snowflake","sound","star","sun","sun","sunset","surf","thunder","tree","violet","voice","water","water","waterfall","wave","wildflower","wind","wood"]),a=["0","1","2","3","4","5","6","7","8","9"],l=t(86735);function s(n){if(!n)return!1;try{JSON.parse(n)}catch(e){return!1}return!0}function f(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"_";return n.split(" ").join(e)}function d(n){return n.split(" ").join("_")}function m(n){return n?n.charAt(0).toUpperCase()+n.slice(1):""}function p(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return String((new Date).getTime()*n)}function _(n){return n.charAt(0).toLowerCase()+n.slice(1)}function E(n){if(null===n||"undefined"===typeof n)return"";var e=n.toString().split("."),t=(0,r.Z)(e,2),o=t[0],i=t[1],u=o.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");return i?"".concat(u,".").concat(i):u}function g(n,e){var t,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=e,u=void 0!==i&&null!==i;if(u||(i=2),1===i)t=n;else{var c=n.length,a=n[c-1];t="y"===a&&"day"!==n?"".concat(n.slice(0,c-1),"ies"):"".concat(n,"s"===a?"es":"s")}if(u&&!o){var l=r?E(i):i;return"".concat(l," ").concat(t)}return t}function A(n){return null===n||void 0===n?void 0:n.replace(/_/g," ")}function h(n){var e=n.length;return"ies"===n.slice(e-3,e)?"".concat(n.slice(0,e-3),"y"):"es"===n.slice(e-2,e)&&"ces"!==n.slice(e-3,e)?n.slice(0,e-2):n.slice(0,e-1)}function T(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return m(A(n.toLowerCase()))}function v(n){var e,t=[["second",60],["minute",60],["hour",24],["day",7],["week",4],["month",12],["year",null]];return t.forEach((function(o,i){if(!e){var u=(0,r.Z)(o,2),c=u[0],a=u[1],l=t.slice(0,i).reduce((function(n,e){return n*Number(e[1])}),1);n<Number(a)*l&&(e=g(c,Math.round(n/l)))}})),e}function O(n){return"undefined"!==typeof n&&null!==n&&!isNaN(n)}function y(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,t=Math.pow(10,e);return Math.round((n||0)*t)/t}function b(){return"".concat((0,l.mp)(i)," ").concat((0,l.mp)(c))}function R(){return"".concat((0,l.mp)(u)).concat((0,l.mp)(a))}function N(n){return null===n||void 0===n?void 0:n.toLowerCase().replace(/\W+/g,"_")}function C(n){var e,t=n.split(o.sep),r=t[t.length-1].split(".");return e=1===r.length?r[0]:r.slice(0,-1).join("."),t.slice(0,t.length-1).concat(e).join(o.sep)}},47974:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pipelines/[pipeline]/dashboard",function(){return t(91175)}])},80022:function(n,e,t){"use strict";function r(n){if(void 0===n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}t.d(e,{Z:function(){return r}})},15544:function(n,e,t){"use strict";function r(n){return r=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},r(n)}t.d(e,{Z:function(){return r}})},99177:function(n,e,t){"use strict";function r(n,e){return r=Object.setPrototypeOf||function(n,e){return n.__proto__=e,n},r(n,e)}function o(n,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&r(n,e)}t.d(e,{Z:function(){return o}})},93189:function(n,e,t){"use strict";t.d(e,{Z:function(){return i}});var r=t(12539),o=t(80022);function i(n,e){if(e&&("object"===r(e)||"function"===typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return(0,o.Z)(n)}}},function(n){n.O(0,[3662,844,2083,341,8789,4913,5896,2714,2631,4783,8013,600,9696,8264,5457,5810,3859,976,9440,9774,2888,179],(function(){return e=47974,n(n.s=e);var e}));var e=n.O();_N_E=e}]);