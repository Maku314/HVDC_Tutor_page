// Toggle subtopics visibility
        function toggleSubtopic(element) {
            element.classList.toggle("active");
            const subtopics = element.nextElementSibling;
            subtopics.style.display = subtopics.style.display === "block" ? "none" : "block";
        }

        // Show content for selected subtopic
        function showContent(topic) {
            const contentTitle = document.getElementById("content-title");
            const contentText = document.getElementById("content-text");
            
            // Remove active class from all subtopics
            document.querySelectorAll('.subtopic').forEach(item => {
                item.classList.remove('active');
            });
            
            // Add active class to clicked subtopic
            event.target.classList.add('active');

            // Update content based on selected topic
            const contentMap = {
                'overview': {
                    title: 'Overview of Power System Protection',
                    text: 'Power system protection is a branch of electrical engineering that deals with the protection of electrical power systems from faults...'
                },
                'importance': {
                    title: 'Importance of Protection',
                    text: 'Protection systems are crucial for maintaining system reliability and preventing equipment damage...'
                },
                'relays': {
                    title: 'Protective Relays',
                    text: 'Relays are automatic devices that detect abnormal conditions in electrical circuits...'
                },
                'circuit-breakers': {
                    title: 'Circuit Breakers',
                    text: 'Circuit breakers are automatically operated electrical switches designed to protect...'
                },
                // Add more content for other topics
            };

            contentTitle.textContent = contentMap[topic].title;
            contentText.textContent = contentMap[topic].text;
        }

        // Open first topic by default
        document.addEventListener('DOMContentLoaded', function() {
            const firstMainTopic = document.querySelector('.main-topic');
            firstMainTopic.click();
            const firstSubtopic = firstMainTopic.nextElementSibling.querySelector('.subtopic');
            firstSubtopic.click();
        });