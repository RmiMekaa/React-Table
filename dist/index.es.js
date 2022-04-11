import e,{useState as t,useEffect as r}from"react";import a from"prop-types";function n(e,a,n,i){const[o,l]=t([]),[s,c]=t([]);return r((()=>{const t=function(e,t){const r=[],a=Math.ceil(e.length/t);for(let e=1;e<=a;e++)r.push(e);return r}(e,n);l([...t]);const r=function(e,t,r){return e.slice((t-1)*r,t*r)}(e,a,n);c([...r])}),[e,l,a,c,n,i]),{slice:s,range:o}}function i({pageSize:t,setPageSize:r,pageSizeOptions:a}){return e.createElement("div",{className:"selectPageSize"},e.createElement("label",null,"Show"," ",e.createElement("select",{value:t,onChange:e=>r(parseInt(e.target.value))},a.map((t=>e.createElement("option",{key:t},t))))," ","Entries"))}function o({searchString:t,setSearchString:r}){return e.createElement("div",{className:"search"},e.createElement("label",null,"Search: "," ",e.createElement("input",{type:"search",value:t,onChange:e=>r(e.target.value)})))}function l({selectPageSize:t,pageSize:r,setPageSize:a,pageSizeOptions:n,searchString:l,setSearchString:s,allowSearch:c}){return c||t?e.createElement("div",{className:"tableHeader"},t&&n.length>1&&e.createElement(i,{pageSize:r,setPageSize:a,pageSizeOptions:n}),c&&e.createElement(o,{searchString:l,setSearchString:s})):null}function s({headers:t,ordering:r,setOrdering:a}){let n=0;return e.createElement("thead",null,e.createElement("tr",null,t.map((t=>(n++,e.createElement("th",{key:t.key,className:"table-th table-th-"+n,onClick:()=>function(e,t,r){let a;a=t&&t.property===e&&"ascending"===t.order?{order:"descending",property:e}:{order:"ascending",property:e};r(a)}(t.key,r,a)},e.createElement("div",{className:"table-th-content"},t.name,e.createElement("span",{className:"table-th-sortIcons"},e.createElement("button",{className:r&&r.property===t.key&&"ascending"===r.order?"sortIcon--active":null},"▲"),e.createElement("button",{className:r&&r.property===t.key&&"descending"===r.order?"sortIcon--active":null},"▼")))))))))}function c({slice:t}){let r=0,a=0;return e.createElement("tbody",{style:{minHeight:3*t.length+"rem"}},t.map((t=>(r++,a++,e.createElement("tr",{className:"table-tr table-tr-"+a,key:"TableRow"+r},Object.values(t).map((t=>e.createElement("td",{className:"table-td",key:"TableData"+r++},t))))))))}function d({headers:t,slice:r,ordering:a,setOrdering:n}){return e.createElement("div",{className:"table"},e.createElement("table",null,e.createElement(s,{headers:t,ordering:a,setOrdering:n}),e.createElement(c,{slice:r})))}function p({currentPage:t,pageSize:r,filteredData:a,slice:n}){return e.createElement("span",{className:"entriesDisplayer"},"Showing ",1===t?t:(t-1)*r+1,"-",r*t>a.length?t*r-(r-n.length):t*r," "," of ",a.length," ","entries")}function u({range:t,currentPage:r,setCurrentPage:a}){return e.createElement("div",{className:"pagination"},e.createElement("button",{disabled:1===r,onClick:()=>a(r-1)},"Previous"),t.map(((t,n)=>e.createElement("button",{key:n,className:r===t?"currentPage":null,onClick:()=>a(t)},t))),e.createElement("button",{disabled:r===t.length,onClick:()=>a(r+1)},"Next"))}function g({range:t,setCurrentPage:a,currentPage:n,slice:i,filteredData:o,pageSize:l,displayEntries:s}){return r((()=>{0===i.length&&1!==n&&a(1)}),[i,n,a]),e.createElement("div",{className:"tableFooter"},s&&e.createElement(p,{currentPage:n,slice:i,filteredData:o,pageSize:l}),t.length>1&&e.createElement(u,{range:t,currentPage:n,setCurrentPage:a}))}i.propTypes={pageSize:a.number,setPageSize:a.func,pageSizeOptions:a.array},o.propTypes={searchString:a.string,setSearchString:a.func},s.propTypes={headers:a.array,ordering:a.object,setOrdering:a.func},c.propTypes={slice:a.arrayOf(a.object).isRequired},d.propTypes={headers:a.arrayOf(a.object).isRequired,slice:a.arrayOf(a.object).isRequired,ordering:a.object,setOrdering:a.func},p.propTypes={currentPage:a.number.isRequired,pageSize:a.number.isRequired,orderedData:a.arrayOf(a.object).isRequired,slice:a.arrayOf(a.object).isRequired},u.propTypes={range:a.arrayOf(a.number).isRequired,currentPage:a.number.isRequired,setCurrentPage:a.func.isRequired},g.propTypes={range:a.arrayOf(a.number).isRequired,setCurrentPage:a.func.isRequired,currentPage:a.number.isRequired,slice:a.arrayOf(a.object).isRequired,filteredData:a.arrayOf(a.object).isRequired,pageSize:a.number.isRequired,displayEntries:a.bool},g.defaultProps={displayEntries:!0};function m({data:a,headers:i,pageSizeOptions:o,displayEntries:s,allowSearch:c,selectPageSize:p}){const[u,m]=t(void 0),[b,f]=t(""),[h,y]=t(o[0]),[S,E]=t(1),x=function(e,a){const[n,i]=t(e);return r((()=>{if(""===a||a.length<2)return i(e);const t=e.filter((e=>Object.values(e).some((e=>e.toString().toLowerCase().includes(a.toLowerCase())))));i(t)}),[e,a]),n}(a,b),z=function(e,a){const[n,i]=t(e);return r((()=>{if(!a)return i(e);"ascending"===a.order?i(e.sort(((e,t)=>e[a.property]>t[a.property]?1:-1))):i(e.sort(((e,t)=>e[a.property]>t[a.property]?-1:1)))}),[n,e,a]),n}(x,u),{slice:w,range:P}=n(z,S,h,u);return e.createElement("div",{className:"mainContainer"},e.createElement(l,{selectPageSize:p,pageSize:h,setPageSize:y,pageSizeOptions:o,searchString:b,setSearchString:f,allowSearch:c}),e.createElement(d,{headers:i,slice:w,ordering:u,setOrdering:m}),0===z.length?e.createElement("span",{className:"noDataMsg"},0===a.length?"No data":'No data found for "'+b+'"'):e.createElement(g,{range:P,slice:w,setCurrentPage:E,currentPage:S,filteredData:x,pageSize:h,displayEntries:s}))}!function(e,t){void 0===t&&(t={});var r=t.insertAt;if(e&&"undefined"!=typeof document){var a=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===r&&a.firstChild?a.insertBefore(n,a.firstChild):a.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}(".mainContainer{font-family:Arial,Helvetica,sans-serif;max-width:100%;width:100%}.tableHeader{color:#000;display:flex;flex-direction:column;gap:.5rem;justify-content:space-between;padding-bottom:.5rem}.search input,.selectPageSize select{background-color:transparent;border:1px solid;border-color:inherit;border-radius:.2rem;color:inherit;outline:none}.search input{padding:.2rem}@media (min-width:426px){.tableHeader{align-items:center;flex-direction:row;justify-content:space-between;padding-bottom:1rem}}.table{color:#000;overflow-x:auto}.table table{border-collapse:collapse;width:100%}.table-th{background-color:#000;border:2px solid #000;color:#fff;cursor:pointer;padding:.5rem;text-align:left}.table-th-content{align-items:center;display:flex;justify-content:space-between;user-select:none}.table-td{border:2px solid #ddd;padding:.5rem}.table-tr:nth-child(2n),.table-tr:nth-child(odd){background-color:#f2f2f2}.table-tr:hover{background-color:#fff}.table-th-sortIcons{align-items:center;display:flex;flex-direction:column;width:fit-content}.table-th-sortIcons button{background-color:transparent;border:none;color:hsla(0,0%,100%,.5);display:inline-block;font-size:.5rem;height:fit-content;padding:0;width:fit-content}.table-th-sortIcons button:first-child{position:relative;top:1px}.table-th-sortIcons button.sortIcon--active{color:#fff;font-size:.6rem}.tableFooter{align-items:center;color:#000;display:flex;flex-direction:column;flex-wrap:wrap;gap:1rem;max-width:100%;padding:1rem}@media (min-width:426px){.tableFooter{align-items:center;flex-direction:row;justify-content:space-between}}.pagination{display:flex;flex-wrap:wrap;gap:.5rem;min-width:100%}.pagination button{border:2px solid transparent;border-radius:.6rem;color:inherit;cursor:pointer;height:2.5rem;width:2.5rem}.pagination button:first-of-type,.pagination button:last-of-type{width:5.5rem}.pagination .currentPage{background:#000;border:2px solid #000;color:#fff}.pagination button[disabled]{cursor:auto}.pagination button[disabled]:hover{border:2px solid transparent}.pagination button:hover{border:2px solid #000}.noDataMsg{background-color:#f2f2f2;border-bottom-left-radius:1rem;border-bottom-right-radius:1rem;box-sizing:border-box;display:inline-block;padding:2rem;text-align:center;width:100%}"),m.propTypes={data:a.arrayOf(a.object).isRequired,headers:a.arrayOf(a.object).isRequired,pageSizeOptions:a.arrayOf(a.number),displayEntries:a.bool,allowSearch:a.bool,selectPageSize:a.bool},m.defaultProps={pageSizeOptions:[10,25,50,100],displayEntries:!0,allowSearch:!0,selectPageSize:!0};export{m as default};
