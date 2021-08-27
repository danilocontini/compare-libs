const buttonOpenModal = document.createElement('div');
buttonOpenModal.innerText = "Compare";
buttonOpenModal.classList.add('button-open-compare-modal');


const separator = document.createElement('div');
separator.classList.add('lib-separator-vertical')

const backdropModal = document.createElement('div');
backdropModal.classList.add('backdrop-modal-compare')
buttonOpenModal.addEventListener('click', () => document.querySelector('body').appendChild(backdropModal));
const buttonCloseModal = document.createElement('div');
buttonCloseModal.classList.add('button-close-compare-modal')
buttonCloseModal.innerHTML = '&#x2715';
buttonCloseModal.addEventListener('click', () => document.querySelector('.backdrop-modal-compare').remove());

const modalContent = document.createElement('div');
modalContent.classList.add('modal-compare')

backdropModal.appendChild(modalContent)
modalContent.appendChild(buttonCloseModal)
let stateCheck = setInterval(() => {
  if (document.readyState === 'complete') {
    const tabs = document.querySelector('.lib-all-tabs')
    if (!!tabs) {
      clearInterval(stateCheck);
      tabs.appendChild(separator);
      tabs.appendChild(buttonOpenModal);
    }
  }
}, 100);

const toSnakeCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('_');

(({ URL: e, Title: s, MSs: a }) => {
  const i = ["prd", "dev", "sit", "hml", "sus"],
    [n, d, l, t, c, o, r, u, $, m] = ["then", "\n", "modifiedBy", "padEnd", "value", "reduce", "map", "slice", "join", "modifiedOn"],
    { entries: f, assign: b } = Object,
    p = (e) => i[o]((s, a) => (e.endsWith(`-${a}`) ? [e[u](0, -4), e[u](-3)] : s), [e, ""]);
  fetch(e)
    [n]((e) => e.json())
    [n]((e) => e[c][r](({ name: e, ...s }) => [...p(e), s])[o]((e, [s, a, i]) => b(e, { [s]: b(e[s] || {}, { [a]: i }) }), {}))
    [n]((e) =>
      f(e)[r](([e, s]) => [
        e,
        f(s)[r](([e, { [l]: { uniqueName: s }, ...a }]) => [e, [[`*${l}`, s], [`*${m}`, a[m]], ...f(a.variables)[r](([e, s]) => [e, s[c]])]]),
      ])
    )
    [n]((e) => (a[0] ? e.filter(([e]) => a.includes(e)) : e))
    [n]((e) => e[r](([e, s]) => [
        e,
        s[o](
          (e, [s, a]) => (
            (s = s.trim() ? s : "_"),
            a[r](([a, i]) => {
              (e[a] = e[a] || {}), (e[a][i] = e[a][i] || []).push(s);
            }),
            e
          ),
          {}
        ),
      ])
    )
    [n]((e) => {
      return e[r](
        ([e, s], entriesIndex) => {
          var table = document.createElement('table'),
              rowTitle = document.createElement('tr'),
              colTitle = document.createElement('td')
          table.classList.add('table-compare')
          table.classList.add(toSnakeCase(e))
          table.classList.add(`table-${entriesIndex}`)
          rowTitle.classList.add('table-title')
          colTitle.setAttribute('colspan', 3)
          colTitle.innerHTML = e
          rowTitle.appendChild(colTitle)
          table.appendChild(rowTitle)
          var rowHeader = document.createElement('tr'),
              tableHeaderParam = document.createElement('th'),
              tableHeaderEnvs = document.createElement('th'),
              tableHeaderValue = document.createElement('th')
          tableHeaderParam.innerHTML = 'Param'
          tableHeaderEnvs.innerHTML = 'Envs'
          tableHeaderValue.innerHTML = 'Valor'
          rowHeader.appendChild(tableHeaderParam)
          rowHeader.appendChild(tableHeaderEnvs)
          rowHeader.appendChild(tableHeaderValue)
          table.appendChild(rowHeader)
          return f(s)
            [r](
              ([e, s], rowIndex) => {
                var row = document.createElement('tr')
                var tdParam = document.createElement('td'),
                    tdEnv = document.createElement('td'),
                    tdValue = document.createElement('td')
                row.classList.add(`tr-content-${rowIndex}`)
                tdParam.classList.add('td-param');
                tdEnv.classList.add('td-env');
                tdValue.classList.add('td-value');
                tdParam.innerHTML = e;
                return f(s)
                  [o](([e, s], [a, i]) => [
                    e.concat(i[$](", ")),
                    s.concat([a])
                  ], [[], []])
                  [r]((e, valueIndex) => {
                    return valueIndex === 0
                      ? tdEnv.innerHTML = e[$]("<br>")
                      : tdValue.innerHTML = e[$]("<br>")
                  }) +
                  row.appendChild(tdParam) +
                  row.appendChild(tdEnv) +
                  row.appendChild(tdValue) +
                  table.appendChild(row)
            })+
          modalContent.appendChild(table)
        }
      )
    })
    [n]((e) => {
      const modalTitle = document.createElement('h1');
      modalTitle.classList.add('modal-title')
      modalTitle.innerText = s;
      modalContent.insertBefore(modalTitle, modalContent.children[1]);
    });
})({ URL: `/alelo/${JSON.parse(document.getElementById("dataProviders").text).data['ms.vss-tfs-web.page-data'].project.id}/_apis/distributedtask/variablegroups`, Title: `Valores de ${new Date().getDate()}/${["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"][new Date().getMonth()]}`, MSs: [] });
