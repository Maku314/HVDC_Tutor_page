  // Initialize: Show first content by default
        document.addEventListener('DOMContentLoaded', function() {
            showContent(0);
        });

        function showContent(index) {
            // Update active state in left panel
            const items = document.querySelectorAll('.subtitle-item');
            items.forEach(item => item.classList.remove('active'));
            items[index].classList.add('active');

            // Show corresponding content in right panel
            const contents = document.querySelectorAll('.content-display');
            contents.forEach(content => content.classList.remove('active'));
            contents[index].classList.add('active');
        }
       // Get all zoomable images and modal elements
        const images = document.querySelectorAll('.zoomable-img');
        const modal = document.getElementById('imageModal');
        const zoomedImg = document.getElementById('zoomedImage');
        const closeBtn = document.querySelector('.close');
        
        // Attach click event to each image
        images.forEach(img => {
            img.addEventListener('click', () => {
                modal.style.display = 'flex';
                zoomedImg.src = img.src;
                
            });
        });
        
        // Close modal
        closeBtn.onclick = () => modal.style.display = 'none';
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        };