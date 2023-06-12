const { Siswa } = require("../models");
const midtransClient = require("midtrans-client");
const uuid = require("uuid");

const uploadToCloudinary = require("../cloudinary/cloudinary");

exports.createSiswa = async (req) => {
  const { body } = req;

  console.log(req.body);

  const fotoArtikel = await uploadToCloudinary(req.files["fotoArtikel"][0]);
  const fotoLogo = await uploadToCloudinary(req.files["fotoLogo"][0]);

  body.nama = fotoArtikel;

  const createSiswa = await Siswa.create({ id: 1, nama: body.nama });

  return { createSiswa };
};

exports.getSiswa = async (req) => {
  return await Siswa.findAll();
};

exports.paymentSiswa = async (req) => {
  const { body } = req;
  let token;

  let snap = new midtransClient.Snap({
    isProduction: false,
    serverKey: "",
  });

  let parameter = {
    transaction_details: {
      order_id: uuid.v4(),
      gross_amount: body.harga,
    },
    credit_card: {
      secure: true,
    },
    customer_details: {
      first_name: "budi",
      last_name: "pratama",
      email: "budi.pra@example.com",
      phone: "08111222333",
    },
  };

  const tokenSnap = await snap.createTransaction(parameter);

  return { token: tokenSnap.token };
};
