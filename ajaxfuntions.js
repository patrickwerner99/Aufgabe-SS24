 $(document).ready(function() {

    // Function to clear form fields
    function clearForm(formId) {
        document.getElementById(formId).reset();
    }

    //function for creating Animal
    function createAnimal() {
        const animal = {
				id: document.getElementById('animalId').value,
				genus: document.getElementById('animalGenus').value,
                gender: document.getElementById('animalGender').value,
                estimatedSize: document.getElementById('animalEstimatedSize').value,
                estimatedWeight: document.getElementById('animalEstimatedWeight').value,
                estimatedAge: document.getElementById('animalEstimatedAge').value
        };

        $.ajax({
            url: 'http://localhost:8080/animals',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(animal),
            success: function(data) {
                alert('Animal created successfully!');
                clearForm('animalForm');
            },
            error: function(error) {
                alert('Error creating animal');
                console.error('Error:', error);
            }
        });
    }

    //function for updating Animal
    function updateAnimal() {
        const animalId = document.getElementById('updateAnimalId').value;
        const animal = {
				id: document.getElementById('animalId').value,
				genus: document.getElementById('animalGenus').value,
                gender: document.getElementById('animalGender').value,
                estimatedSize: document.getElementById('animalEstimatedSize').value,
                estimatedWeight: document.getElementById('animalEstimatedWeight').value,
                estimatedAge: document.getElementById('animalEstimatedAge').value
        };

        $.ajax({
            url: `http://localhost:8080/animals/${animalId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(animal),
            success: function(data) {
                alert('Animal updated successfully!');
                clearForm('updateAnimalForm');
            },
            error: function(error) {
                alert('Error updating animal');
                console.error('Error:', error);
            }
        });
    }

    //function for deleting Animal
    function deleteAnimal() {
        const animalId = document.getElementById('deleteAnimalId').value;

        $.ajax({
            url: `http://localhost:8080/animals/${animalId}`,
            type: 'DELETE',
            success: function(data) {
                alert('Animal deleted successfully!');
                clearForm('deleteAnimalForm');
            },
            error: function(error) {
                alert('Error deleting animal');
                console.error('Error:', error);
            }
        });
    }

    //function for creating Genus
    function createGenus() {
        const genus = {
                name: document.getElementById('genusName').value
        };

        $.ajax({
            url: 'http://localhost:8080/genus',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(genus),
            success: function(data) {
                alert('Genus created successfully!');
                clearForm('genusForm');
            },
            error: function(error) {
                alert('Error creating genus');
                console.error('Error:', error);
            }
        });
    }

    //function for updating Genus
    function updateGenus() {
        const genusId = document.getElementById('updateGenusId').value;
        const genus = {
                name: document.getElementById('genusName').value
        };

        $.ajax({
            url: `http://localhost:8080/genus/${genusId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(genus),
            success: function(data) {
                alert('Genus updated successfully!');
                clearForm('updateGenusForm');
            },
            error: function(error) {
                alert('Error updating genus');
                console.error('Error:', error);
            }
        });
    }

    //function for deleting Genus
    function deleteGenus() {
        const genusId = document.getElementById('deleteGenusId').value;

        $.ajax({
            url: `http://localhost:8080/genus/${genusId}`,
            type: 'DELETE',
            success: function(data) {
                alert('Genus deleted successfully!');
                clearForm('deleteGenusForm');
            },
            error: function(error) {
                alert('Error deleting genus');
                console.error('Error:', error);
            }
        });
    }

    //function for creating Location
    function createLocation() {
        const location = {
                shortTitle: document.getElementById('locationShortTitle').value,
                description: document.getElementById('locationDescription').value,
                date: document.getElementById('locationDate').value
        };

        $.ajax({
            url: 'http://localhost:8080/api/location',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(location),
            success: function(data) {
                alert('Location created successfully!');
                clearForm('locationForm');
            },
            error: function(error) {
                alert('Error creating location');
                console.error('Error:', error);
            }
        });
    }

    //function for updating Location
    function updateLocation() {
        const locationId = document.getElementById('updateLocationId').value;
        const location = {
                shortTitle: document.getElementById('locationShortTitle').value,
                description: document.getElementById('locationDescription').value,
                date: document.getElementById('locationDate').value
        };

        $.ajax({
            url: `http://localhost:8080/api/location/${locationId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(location),
            success: function(data) {
                alert('Location updated successfully!');
                clearForm('updateLocationForm');
            },
            error: function(error) {
                alert('Error updating location');
                console.error('Error:', error);
            }
        });
    }

    //function for deleting Location
    function deleteLocation() {
        const locationId = document.getElementById('deleteLocationId').value;

        $.ajax({
            url: `http://localhost:8080/api/location/${locationId}`,
            type: 'DELETE',
            success: function(data) {
                alert('Location deleted successfully!');
                clearForm('deleteLocationForm');
            },
            error: function(error) {
                alert('Error deleting location');
                console.error('Error:', error);
            }
        });
    }

    //function for creating Observation
    function createObservation() {
        const observation = {
                animalId: document.getElementById('observationAnimalId').value,
                locationId: document.getElementById('observationLocationId').value,
                observationDate: document.getElementById('observationDate').value
        };

        $.ajax({
            url: 'http://localhost:8080/api/observation',
            type: 'POST',
            contentType: 'application/json',
            data: JSON.stringify(observation),
            success: function(data) {
                alert('Observation created successfully!');
                clearForm('observationForm');
            },
            error: function(error) {
                alert('Error creating observation');
                console.error('Error:', error);
            }
        });
    }

    //function for updating Observation
    function updateObservation() {
        const observationId = document.getElementById('updateObservationId').value;
        const observation = {
            animalId: document.getElementById('updateObservationAnimalId').value,
            locationId: document.getElementById('updateObservationLocationId').value,
            observationDate: document.getElementById('updateObservationDate').value
        };

        $.ajax({
            url: `http://localhost:8080/api/observation/${observationId}`,
            type: 'PUT',
            contentType: 'application/json',
            data: JSON.stringify(observation),
            success: function(data) {
                alert('Observation updated successfully!');
                clearForm('updateObservationForm');
            },
            error: function(error) {
                alert('Error updating observation');
                console.error('Error:', error);
            }
        });
    }

    //function for deleting Observation
    function deleteObservation() {
        const observationId = document.getElementById('deleteObservationId').value;

        $.ajax({
            url: `http://localhost:8080/api/observation/${observationId}`,
            type: 'DELETE',
            success: function(data) {
                alert('Observation deleted successfully!');
                clearForm('deleteObservationForm');
            },
            error: function(error) {
                alert('Error deleting observation');
                console.error('Error:', error);
            }
        });
    }
})
