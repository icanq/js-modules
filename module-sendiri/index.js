function pangkatDua(angka) {
  return angka * angka
}

function pangkatTiga(angka) {
  return angka * angka * angka
}

const nama = 'Icanq'


// kalau mau export satu module saja, bisa gunakan module.export = namaModulenya


// kalau mau export beberapa file dalam satu kali eksport, gunakan module.export = { moduleYangMauDiExport1, moduleYangMauDiExport2 }
// CommonJS
module.exports = { pangkatDua, pangkatTiga, nama }