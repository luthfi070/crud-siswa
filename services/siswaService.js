const { Siswa } = require("../models");

exports.createSiswa = async (req) => {
  const { body } = req;

  const createSiswa = await Siswa.create(body);

  return { createSiswa };
};
