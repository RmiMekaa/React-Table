"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("prop-types");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var r=a(e),n=a(t);function l(t,a,r,n){const[l,i]=e.useState([]),[o,s]=e.useState([]);return e.useEffect((()=>{const e=function(e,t){const a=[],r=Math.ceil(e.length/t);for(let e=1;e<=r;e++)a.push(e);return a}(t,r);i([...e]);const n=function(e,t,a){return e.slice((t-1)*a,t*a)}(t,a,r);s([...n])}),[t,i,a,s,r,n]),{slice:o,range:l}}function i({pageSize:e,setPageSize:t,pageSizeOptions:a}){return r.default.createElement("div",{className:"selectPageSize"},r.default.createElement("label",null,"Show"," ",r.default.createElement("select",{value:e,onChange:e=>t(parseInt(e.target.value))},a.map((e=>r.default.createElement("option",{key:e},e))))," ","Entries"))}function o({searchString:e,setSearchString:t}){return r.default.createElement("div",{className:"search"},r.default.createElement("label",null,"Search: "," ",r.default.createElement("input",{type:"search",value:e,onChange:e=>t(e.target.value)})))}function s({selectPageSize:e,pageSize:t,setPageSize:a,pageSizeOptions:n,searchString:l,setSearchString:s,allowSearch:d}){return d||e?r.default.createElement("div",{className:"tableHeader"},e&&n.length>1&&r.default.createElement(i,{pageSize:t,setPageSize:a,pageSizeOptions:n}),d&&r.default.createElement(o,{searchString:l,setSearchString:s})):null}function d({headers:e,ordering:t,setOrdering:a}){let n=0;return r.default.createElement("thead",null,r.default.createElement("tr",null,e.map((e=>(n++,r.default.createElement("th",{key:e.key,className:"table-th table-th-"+n,onClick:()=>function(e,t,a){let r;r=t&&t.property===e&&"ascending"===t.order?{order:"descending",property:e}:{order:"ascending",property:e};a(r)}(e.key,t,a)},r.default.createElement("div",{className:"table-th-content"},e.name,r.default.createElement("span",{className:"table-th-sortIcons"},r.default.createElement("button",{className:t&&t.property===e.key&&"ascending"===t.order?"sortIcon--active":null},"▲"),r.default.createElement("button",{className:t&&t.property===e.key&&"descending"===t.order?"sortIcon--active":null},"▼")))))))))}function c({slice:e}){let t=0,a=0;return r.default.createElement("tbody",null,e.map((e=>(t++,a++,r.default.createElement("tr",{className:"table-tr table-tr-"+a,key:"TableRow"+t},Object.values(e).map((e=>r.default.createElement("td",{className:"table-td",key:"TableData"+t++},e))))))))}function u({headers:e,slice:t,ordering:a,setOrdering:n}){return r.default.createElement("div",{className:"table"},r.default.createElement("table",null,r.default.createElement(d,{headers:e,ordering:a,setOrdering:n}),r.default.createElement(c,{slice:t})))}function f({currentPage:e,pageSize:t,filteredData:a,slice:n}){return r.default.createElement("span",{className:"entriesDisplayer"},"Showing ",1===e?e:(e-1)*t+1,"-",t*e>a.length?e*t-(t-n.length):e*t," "," of ",a.length," ","entries")}function p({range:e,currentPage:t,setCurrentPage:a}){return r.default.createElement("div",{className:"pagination"},r.default.createElement("button",{disabled:1===t,onClick:()=>a(t-1)},"Previous"),e.map(((e,n)=>r.default.createElement("button",{key:n,className:t===e?"currentPage":null,onClick:()=>a(e)},e))),r.default.createElement("button",{disabled:t===e.length,onClick:()=>a(t+1)},"Next"))}function g({range:t,setCurrentPage:a,currentPage:n,slice:l,filteredData:i,pageSize:o,displayEntries:s}){return e.useEffect((()=>{0===l.length&&1!==n&&a(1)}),[l,n,a]),r.default.createElement("div",{className:"tableFooter"},s&&r.default.createElement(f,{currentPage:n,slice:l,filteredData:i,pageSize:o}),t.length>1&&r.default.createElement(p,{range:t,currentPage:n,setCurrentPage:a}))}i.propTypes={pageSize:n.default.number,setPageSize:n.default.func,pageSizeOptions:n.default.array},d.propTypes={headers:n.default.array,ordering:n.default.object,setOrdering:n.default.func},c.propTypes={slice:n.default.array,pageSize:n.default.number,searchString:n.default.string},f.propTypes={currentPage:n.default.number.isRequired,pageSize:n.default.number.isRequired,orderedData:n.default.arrayOf(n.default.object).isRequired,slice:n.default.arrayOf(n.default.object).isRequired},p.propTypes={range:n.default.arrayOf(n.default.number).isRequired,currentPage:n.default.number.isRequired,setCurrentPage:n.default.func.isRequired},g.propTypes={range:n.default.arrayOf(n.default.number).isRequired,setCurrentPage:n.default.func.isRequired,currentPage:n.default.number.isRequired,slice:n.default.arrayOf(n.default.object).isRequired,filteredData:n.default.arrayOf(n.default.object).isRequired,pageSize:n.default.number.isRequired,displayEntries:n.default.bool},g.defaultProps={displayEntries:!0};function m({data:t,headers:a,pageSizeOptions:n,displayEntries:i,allowSearch:o,selectPageSize:d}){const[c,f]=e.useState(void 0),[p,m]=e.useState(""),[b,h]=e.useState(n[0]),[y,S]=e.useState(1),E=function(t,a){const[r,n]=e.useState(t);return e.useEffect((()=>{if(""===a||a.length<2)return n(t);const e=t.filter((e=>Object.values(e).some((e=>e.toString().toLowerCase().includes(a.toLowerCase())))));n(e)}),[t,a]),r}(t,p),z=function(t,a){const[r,n]=e.useState(t);return e.useEffect((()=>{if(!a)return n(t);"ascending"===a.order?n(t.sort(((e,t)=>e[a.property]>t[a.property]?1:-1))):n(t.sort(((e,t)=>e[a.property]>t[a.property]?-1:1)))}),[r,t,a]),r}(E,c),{slice:x,range:P}=l(z,y,b,c);return r.default.createElement("div",{className:"mainContainer"},r.default.createElement(s,{selectPageSize:d,pageSize:b,setPageSize:h,pageSizeOptions:n,searchString:p,setSearchString:m,allowSearch:o}),r.default.createElement(u,{headers:a,slice:x,ordering:c,setOrdering:f}),0===z.length?r.default.createElement("span",{className:"noDataMsg"},0===t.length?"No data":'No data found for "'+p+'"'):r.default.createElement(g,{range:P,slice:x,setCurrentPage:S,currentPage:y,filteredData:E,pageSize:b,displayEntries:i}))}!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".mainContainer{font-family:Arial,Helvetica,sans-serif;max-width:100%;min-height:100vh;width:100%}.tableHeader{display:flex;flex-direction:column;gap:.5rem;justify-content:space-between;padding-bottom:.5rem}.search input,.selectPageSize select{background-color:transparent;border:1px solid;border-color:inherit;border-radius:.2rem;color:inherit;outline:none}.search input{padding:.2rem}@media (min-width:426px){.tableHeader{align-items:center;flex-direction:row;justify-content:space-between;padding-bottom:1rem}}.table{overflow-x:auto}.table table{border-collapse:collapse;width:100%}.table-th{background-color:#000;border:2px solid #000;color:#fff;cursor:pointer;padding:.5rem;text-align:left}.table-th-content{align-items:center;display:flex;justify-content:space-between;user-select:none}.table-td{border:2px solid #ddd;padding:.5rem}.table-tr:nth-child(2n),.table-tr:nth-child(odd){background-color:#f2f2f2}.table-tr:hover{background-color:#fff}.table-th-sortIcons{align-items:center;display:flex;flex-direction:column;width:fit-content}.table-th-sortIcons button{background-color:transparent;border:none;color:hsla(0,0%,100%,.5);display:inline-block;font-size:.5rem;height:fit-content;padding:0;width:fit-content}.table-th-sortIcons button:first-child{position:relative;top:1px}.table-th-sortIcons button.sortIcon--active{color:#fff;font-size:.6rem}.tableFooter{align-items:center;display:flex;flex-direction:column;gap:1rem;padding:1rem}@media (min-width:426px){.tableFooter{align-items:center;flex-direction:row;justify-content:space-between}}.pagination{display:flex;flex-wrap:wrap;gap:.5rem;min-width:100%}.pagination button{border:2px solid transparent;border-radius:.6rem;color:inherit;cursor:pointer;height:2.5rem;width:2.5rem}.pagination button:first-of-type,.pagination button:last-of-type{width:5.5rem}.pagination .currentPage{background:#000;border:2px solid #000;color:#fff}.pagination button[disabled]{cursor:auto}.pagination button[disabled]:hover{border:2px solid transparent}.pagination button:hover{border:2px solid #000}.noDataMsg{background-color:#f2f2f2;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-sizing:border-box;display:inline-block;padding:2rem;text-align:center;width:100%}"),m.propTypes={data:n.default.arrayOf(n.default.object).isRequired,headers:n.default.arrayOf(n.default.object).isRequired,pageSizeOptions:n.default.arrayOf(n.default.number),displayEntries:n.default.bool,allowSearch:n.default.bool,selectPageSize:n.default.bool},m.defaultProps={pageSizeOptions:[10,25,50,100],displayEntries:!0,allowSearch:!0,selectPageSize:!0},exports.ReactTable=m;
