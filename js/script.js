const quizData = [
  {
    question: 'Sumber hukum dibedakan ke dalam sumber hukum materil dan formal. Manakah yang termasuk sumber hukum formal?',
    options: ['Yurisprudensi', 'Rekam medis', 'Saksi ahli', 'Informed consent'],
    answer: 'Yurisprudensi',
  },
  {
    question: 'Kode diagnosa yang tepat untuk gagal ginjal kronik?',
    options: ['N18.0', 'N18.9', 'N17.9', 'N18.5'],
    answer: 'N18.9',
  },
  {
    question: 'Angka yang menunjukan persentase penggunaan tempat tidur yang di gunakan dalam satu periode waktu?',
    options: ['BTO', 'TOI', 'LOS', 'BOR'],
    answer: 'BOR',
  },
  {
    question: 'Analisis kuantitatif berkas rekam medis meliputi komponen berikut ini , kecuali?',
    options: ['Review identifikasi', 'Review ketepatan', 'Review pencatatan', 'Review pelaporan'],
    answer: 'Review ketepatan',
  },
  {
    question: 'kode diagnosa untuk blight ovum adalah?',
    options: [
      'O20.0',
      'O20.9',
      'O02.0',
      'O06.4',
    ],
    answer: 'O02.0',
  },
  {
    question: 'Suatu review pengisian RM yang berkaitan dengan kekonsistenan isi dan penegasannya merupakan bukti bahwa RM tersebut akurat dan lengkap adalah?',
    options: ['Analisis retrospektif', 'Analisis statistik', 'Analisis kualitatif', 'Analisis kuantitatif'],
    answer: 'Analisis kualitatif',
  },
  {
    question: 'untuk kepentingan hukum maka isi rekam medis dapt di buka di?',
    options: [
      'Kantor polisi',
      'Kantor jaksa',
      'Hadapan notaris',
      'Hadapan hakim dalam sidang pengadilan',
    ],
    answer: 'Hadapan hakim dalam sidang pengadilan',
  },
  {
    question: 'Bayi lahir dengan diagnosa icteric neonatum BBLC KB SMK Spontan, kode diagnosa utama yang tepat adalah?',
    options: ['P59.9', 'P21.9', 'P59.8', 'P59.0'],
    answer: 'P59.0',
  },
  {
    question: 'Berkas rekam medis adalah milik?',
    options: [
      'Pasien',
      'Faskes',
      'Dokter',
      'Pemerintah',
    ],
    answer: 'Faskes',
  },

  {
    question: 'Kode etik PMIK mengatur kewajiban dan larangan yang harus dipatuhi seorang PMIK. Manakah perbuatan di bawah ini yang bertentangan dengan kode etik PMIK? ',
    options: ['Selalu memberikan salam, senyum dan sapa kepada pasien yang dilayani', 'Mendahulukan pelayanan kepada pasien tertentu karena diberi imbalan', 'Mendahulukan kepentingan pasien daripada kepentingan pribadi','Selalu datang tepat waktu saat kerja'],
    answer: 'Mendahulukan pelayanan kepada pasien tertentu karena diberi imbalan',
  },

  {
    question: 'Seorang PMIK ditugaskan sebagai koder. Pada rekam medis ditemukan catatan diagnosa dokter yang kurang jelas. Apa yang saudara lakukan?',
    options: [
      'Tidak perlu dikode',
      'Dikode dengan perkiraan',
      'Konfirmasi dokter untuk kejelasan diagnosa',
      'Melihat catatan dokter lain dan disimpulkan',
    ],
    answer: 'Konfirmasi dokter untuk kejelasan diagnosa',
  },

  {
    question: 'Dalam mengelola sumber daya di unit rekam medis dan informasi kesehatan yang paling sulit adalah mengatur tenaga. Oleh karena itu, seorang manajer perlu memberi tugas dengan jelas dan diketahui oleh yang bersangkutan. Fungsi manajemen apakah yang perlu dilakukan dalam hal ini ?',
    options: [
      'Pengawasan',
      'Perencanaan',
      'Penggerakkan',
      'Pengorganisasian',
    ],
    answer: 'Pengorganisasian',
  },

  {
    question: 'Dalam pengelolaan unit rekam medis dan informasi kesehatan memerlukan dukungan sumber daya, diantaranya sumber daya manusia. Jumlah dan jenis sumber daya manusia harus memiliki kompetensi yang sesuai. Apa pengertian sumber daya manusia?',
    options: [
      'Tenaga yang bekerja sesuai keadaan dan klasifikasinya',
      'Tenaga yang bekerja sesuai kebutuhan dan klarifikasinya',
      'Tenaga yang bekerja sesuai kebutuhan dan klasifikasinya',
      'Tenaga yang bekerja tidak sesuai kebutuhan dan klasifikasinya',
    ],
    answer: 'Tenaga yang bekerja sesuai kebutuhan dan klasifikasinya',
  },

  {
    question: 'Setiap lembaran dari Rekam Medis harus di absahkan (autentikasi) oleh …..',
    options: [
      'Yang melengkapi lembaran tersebut',
      'Penanggungjawab lembaran tersebut',
      'Tim verifikasir',
      'Kepala Rekam Medis',
    ],
    answer: 'Penanggungjawab lembaran tersebut',
  },

  {
    question: 'Hybrid Health Record merupakan RM yang berisi ....',
    options: [
      'Rekaman yang tertulis',
      'Rekaman berbasis elektronik',
      'Rekaman baik yang tertulis maupun yang elektronik',
      'Rekaman baik yang tertulis maupun berbentuk gambar',
    ],
    answer: 'Rekaman baik yang tertulis maupun yang elektronik',
  },

  {
    question: 'Rekam Medis pasien yang dikirim ke ruang rawat digunakan oleh pemberi pelayanan selama pasien dirawat. Selesainya perawatan RM pasien dikembalikan dalam 24 jam setelah pulang . Hal ini tepatnya dikatakan memiliki kriteria ....',
    options: [
      'Dapat dibaca /Legible',
      'Dapat Dipercaya /Reliable',
      'Tepat /Precise',
      'Tepat waktu/Timely',
    ],
    answer: 'Tepat waktu/Timely',
  },

  {
    question: 'Satellite ambulatory care unit merupakan pelayanan ....',
    options: [
      'Unit rawat jalan, cabang dari sebuah rumah sakit',
      'Unit penunjang diagnostik',
      'Unit rawat jalan di daerah pinggiran',
      'Poliklinik swasta yang berdiri sendiri',
    ],
    answer: 'Unit rawat jalan, cabang dari sebuah rumah sakit',
  },

  {
    question: 'Waktu pelaksanaan audit pendokumentasian rekam medis juga tergantung dari tipe rumah sakit dan pelaksanaannya dilakukan oleh Profesional Perekam Medis dan Informasi Kesehatan yang mempunyai kompetensi khusus agar hasilnya tepat dan dapat dipakai untuk pimpinan dalam menjaga mutu pelayanan. Untuk rumah sakit acute care pelaksanaannya secara .…',
    options: [
      'Retrospective Analysis (RA)',
      'Concurrent Analysis (CA)',
      'RA dan CA',
      'Setiap saat ada waktu',
    ],
    answer: 'Retrospective Analysis (RA)',
  },
  
];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');
const retryButton = document.getElementById('retry');
const showAnswerButton = document.getElementById('showAnswer');

let currentQuestion = 0;
let score = 0;
let incorrectAnswers = [];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function displayQuestion() {
  const questionData = quizData[currentQuestion];

  const questionElement = document.createElement('div');
  questionElement.className = 'question';
  questionElement.innerHTML = questionData.question;

  const optionsElement = document.createElement('div');
  optionsElement.className = 'options';

  const shuffledOptions = [...questionData.options];
  shuffleArray(shuffledOptions);

  for (let i = 0; i < shuffledOptions.length; i++) {
    const option = document.createElement('label');
    option.className = 'option';

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.name = 'quiz';
    radio.value = shuffledOptions[i];

    const optionText = document.createTextNode(shuffledOptions[i]);

    option.appendChild(radio);
    option.appendChild(optionText);
    optionsElement.appendChild(option);
  }

  quizContainer.innerHTML = '';
  quizContainer.appendChild(questionElement);
  quizContainer.appendChild(optionsElement);
}

function checkAnswer() {
  const selectedOption = document.querySelector('input[name="quiz"]:checked');
  if (selectedOption) {
    const answer = selectedOption.value;
    if (answer === quizData[currentQuestion].answer) {
      score++;
    } else {
      incorrectAnswers.push({
        question: quizData[currentQuestion].question,
        incorrectAnswer: answer,
        correctAnswer: quizData[currentQuestion].answer,
      });
    }
    currentQuestion++;
    selectedOption.checked = false;
    if (currentQuestion < quizData.length) {
      displayQuestion();
    } else {
      displayResult();
    }
  }
}

function displayResult() {
  quizContainer.style.display = 'none';
  submitButton.style.display = 'none';
  retryButton.style.display = 'inline-block';
  showAnswerButton.style.display = 'inline-block';
  resultContainer.innerHTML = `Nilai anda adalah ${score} dari ${quizData.length}!`;
}

function retryQuiz() {
  currentQuestion = 0;
  score = 0;
  incorrectAnswers = [];
  quizContainer.style.display = 'block';
  submitButton.style.display = 'inline-block';
  retryButton.style.display = 'none';
  showAnswerButton.style.display = 'none';
  resultContainer.innerHTML = '';
  displayQuestion();
}



submitButton.addEventListener('click', checkAnswer);
retryButton.addEventListener('click', retryQuiz);
showAnswerButton.addEventListener('click', showAnswer);

displayQuestion();
