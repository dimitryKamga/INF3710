DROP DATABASE IF EXISTS CASCADE VetoDB;
CREATE DATABASE VetoDB;

DROP SCHEMA IF EXISTS VetoDB CASCADE;

CREATE SCHEMA VetoDB;

CREATE TYPE VetoDB.sexe AS ENUM('M', 'F');

CREATE TYPE VetoDB.fonction AS ENUM('Gestionnaire', 'Veterinaire', 'Infirmiere', 'Secretaire', 'Personnel entretien');

CREATE TYPE VetoDB.etat AS ENUM('Vivant', 'Decede')

CREATE TYPE VetoDB.adresse AS (
    rue         VARCHAR(20),
    ville       VARCHAR(20),
    province    VARCHAR(20),
    codePostal  VARCHAR(6)
);


CREATE TABLE IF NOT EXISTS VetoDB.Employe (
    numEmploye          VARCHAR(5)      NOT NULL PRIMARY KEY,
    nom                 VARCHAR(30)     NOT NULL,
    adresse             VARCHAR(40)     NOT NULL,
    numTel              VARCHAR(11)     NOT NULL,
    dateNaissance       DATE            NOT NULL,
    sexe                VetoDB.sexe     NOT NULL,
    nas                 VARCHAR(9)      NOT NULL,
    salaire             NUMERIC(6,0)    NOT NULL,
    fonction            VetoDB.fonction NOT NULL
);

CREATE TABLE IF NOT EXISTS VetoDB.Clinique (
    numClinique         VARCHAR(5)      NOT NULL PRIMARY KEY,
    adresse             VetoDB.adresse  NOT NULL,
    numTel              VARCHAR(11)     NOT NULL,
    numFax              VARCHAR(11)     NOT NULL,
    numGestionnaire     VARCHAR(5)      NOT NULL REFERENCES VetoDB.Employe(numEmploye)
);

CREATE TABLE IF NOT EXISTS VetoDB.Embauche (
    numEmploye          VARCHAR(5)      NOT NULL REFERENCES VetoDB.Employe,
    numClinique         VARCHAR(5)      NOT NULL REFERENCES VetoDB.Clinique,
    PRIMARY KEY(numEmploye, numClinique)
);

CREATE TABLE IF NOT EXISTS VetoDB.Proprietaire (
numProprietaire     VARCHAR(5)          NOT NULL PRIMARY KEY,
    nom                 VARCHAR(30)     NOT NULL,
    adresse             VARCHAR(40)     NOT NULL,
    numTel              VARCHAR(11)     NOT NULL
);

CREATE TABLE IF NOT EXISTS VetoDB.Animal (
    numAnimal           VARCHAR(5)      NOT NULL PRIMARY KEY,
    numProprietaire     VARCHAR(5)      NOT NULL REFERENCES VetoDB.Proprietaire,
    nom                 VARCHAR(30)     NOT NULL,
    type                VARCHAR(10)     NOT NULL,
    description         VARCHAR         NOT NULL,
    dateNaissance       DATE            NOT NULL,
    dateInscription     DATE            NOT NULL,
    etat                VetoDB.etat     NOT NULL
);

CREATE TABLE IF NOT EXISTS VetoDB.Traitement (
    numTraitement       VARCHAR(5)      NOT NULL PRIMARY KEY,
    description         VARCHAR         NOT NULL,
    cout                NUMERIC(5, 2)   NOT NULL
);

CREATE TABLE IF NOT EXISTS VetoDB.Prescription (
    numPrescription     VARCHAR(5)      NOT NULL PRIMARY KEY,
    numAnimal           VARCHAR(5)      NOT NULL REFERENCES VetoDB.Animal,
    numTraitement       VARCHAR(5)      NOT NULL REFERENCES VetoDB.Traitement,
    numExamen           VARCHAR(5)      REFERENCES VetoDB.Examen,
    quantite            INTEGER         NOT NULL,
    dateDebut           DATE            NOT NULL,
    dateFin             DATE            NOT NULL
);

CREATE TABLE IF NOT EXISTS VetoDB.Examen (
    numPrescription     VARCHAR(5)      NOT NULL PRIMARY KEY,
    numVeterinaire      VARCHAR(5)      NOT NULL REFERENCES VetoDB.Employe(numEmploye),
    heure               TIME            NOT NULL,
    description         VARCHAR         NOT NULL,
    FOREIGN KEY numPrescription REFERENCES VetoDB.Prescription
);

ALTER TABLE VetoDB.Prescription
ADD CONSTRAINT examen FOREIGN KEY numExamen REFERENCES VetoDB.Examen(numPrescription);