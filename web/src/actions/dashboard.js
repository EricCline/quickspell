import FileSaver from 'file-saver';

export const fetchSpells = (classname="", level="") => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch(apiPath(classname, level), {headers, })
      .then(res => res.json())
      .then(spells => {
        spells.sort(function(a, b) {
          if (a.name < b.name) {
            return -1;
          }
          return 1;
        });
        return dispatch({
          type: 'FETCH_SPELLS',
          spells
        })
      })
  }
}

export const spellsToPdf = (classname="", level="") => {
  return dispatch => {
    let headers = {"Content-Type": "application/json"};
    return fetch(apiPath(classname, level), {headers, method: 'POST'})
      .then(res => res.blob())
      .then(blob => {
        FileSaver.saveAs(blob, 'spells.pdf');
      })
  }
}

const apiPath = (classname, level) => {
  let path = "/api/spells";
  if (classname !== "") {
    path += "/" + classname;
  }
  if (level !== "") {
    path += "/" + level;
  }
  path += "/";
  return path;
}
