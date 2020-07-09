-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 09, 2020 at 02:49 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.4.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `corona`
--

-- --------------------------------------------------------

--
-- Table structure for table `form`
--

CREATE TABLE `form` (
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `message` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `prevention`
--

CREATE TABLE `prevention` (
  `p_id` int(11) DEFAULT NULL,
  `preventions` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `prevention`
--

INSERT INTO `prevention` (`p_id`, `preventions`) VALUES
(NULL, 'Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.'),
(NULL, ''),
(NULL, 'To prevent the spread of COVID-19:'),
(NULL, '- Clean your hands often. Use soap and water, or an alcohol-based hand rub.'),
(NULL, '- Maintain a safe distance from anyone who is coughing or sneezing.'),
(NULL, '- Wear a mask when physical distancing is not possible.'),
(NULL, '- Don’t touch your eyes, nose or mouth.'),
(NULL, '- Cover your nose and mouth with your bent elbow or a tissue when you cough or sneez'),
(NULL, '- Stay home if you feel unwell.'),
(NULL, '- If you have a fever, cough and difficulty breathing, seek medical attention.'),
(NULL, ''),
(NULL, 'Calling in advance allows your healthcare provider to quickly direct you to the right health facility. This protects you, and prevents the spread of viruses and other infections.'),
(NULL, ''),
(NULL, 'Masks'),
(NULL, ''),
(NULL, 'Masks can help prevent the spread of the virus from the person wearing the mask to others. Masks alone do not protect against COVID-19, and should be combined with physical distancing and hand hygiene. Follow the advice provided by your local health authority.'),
(NULL, '');

-- --------------------------------------------------------

--
-- Table structure for table `symptoms`
--

CREATE TABLE `symptoms` (
  `s_id` int(11) NOT NULL,
  `symptom` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `symptoms`
--

INSERT INTO `symptoms` (`s_id`, `symptom`) VALUES
(1, ''),
(2, 'Most common symptoms:'),
(3, '- fever'),
(4, '- dry cough'),
(5, '- tiredness'),
(6, ''),
(7, 'Less common symptoms:'),
(8, '- aches and pains'),
(9, '- sore throat'),
(10, '- diarrhoea'),
(11, '- conjuctivitis'),
(12, '- headache'),
(13, '- loss of taste or smell'),
(14, 'a rash on skin,or discolouration of fingers or toes'),
(15, ''),
(16, 'Serious symptoms:'),
(17, '- difficulty in breathing or shortness of breath'),
(18, '- chest pain or pressure'),
(19, '- loss of speech or movement'),
(20, ''),
(21, 'Seek immediate medical attention if you have serious symptoms. Always call before visiting your doctor or health facility.'),
(23, 'People with mild symptoms who are otherwise healthy should manage their symptoms at home.'),
(24, 'On average it takes 5–6 days from when someone is infected with the virus for symptoms to show, however it can take up to 14 days.\r\n'),
(25, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `form`
--
ALTER TABLE `form`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `symptoms`
--
ALTER TABLE `symptoms`
  ADD PRIMARY KEY (`s_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `symptoms`
--
ALTER TABLE `symptoms`
  MODIFY `s_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
