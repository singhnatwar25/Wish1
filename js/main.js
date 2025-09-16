// Google Analytics
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-DQLSDC3YXZ');

// Google Analytics (second instance)
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-220104775-1');

// Main JavaScript file

// Function to detect user's city and set it in the dropdown
function detectAndSetCity() {
    const citySelect = document.getElementById('citySelect');
    if (!citySelect) return;

    // First check if city is already set in localStorage
    const savedCity = localStorage.getItem('userCity');
    if (savedCity) {
        citySelect.value = savedCity;
        return;
    }

    // If not in localStorage, detect city from IP
    fetch('https://ipapi.co/json/')
        .then(response => response.json())
        .then(data => {
            if (data && data.city) {
                const userCity = data.city.toLowerCase();
                // Check if the detected city is in our dropdown
                const options = Array.from(citySelect.options).map(opt => opt.value.toLowerCase());
                const foundOption = citySelect.querySelector(`option[value="${userCity}"]`);
                
                if (foundOption) {
                    citySelect.value = userCity;
                    // Save to localStorage for future visits
                    localStorage.setItem('userCity', userCity);
                }
            }
        })
        .catch(error => {
            console.error('Error detecting city:', error);
            // Fallback to default city if detection fails
            citySelect.value = 'jaipur';
        });
}

document.addEventListener('DOMContentLoaded', function() {
    // Initialize city detection
    detectAndSetCity();
    
    // Save city selection when user changes it manually
    const citySelect = document.getElementById('citySelect');
    if (citySelect) {
        citySelect.addEventListener('change', function() {
            localStorage.setItem('userCity', this.value);
        });
    }
    
    const audio = document.getElementById("hoverSound");
    
    if (audio) {
        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Reset audio to start
                audio.play().catch(e => console.log("Audio play failed:", e));
            });
        });
    }
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Card hover sound effect
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    const hoverSound = document.getElementById('hoverSound');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (hoverSound) {
                hoverSound.currentTime = 0;
                hoverSound.play();
            }
        });
    });
});

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});



    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


      document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.querySelector(".navbar");
  
        window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
        });
      });
    


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2, // Shows 2 testimonials at a time
      spaceBetween: 20, // Adds space between slides
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


      document.querySelectorAll('.toggle-switch').forEach(toggle => {
        toggle.addEventListener('click', () => {
          toggle.classList.toggle('active');
        });
      });
    


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


          function increment() {
            var quantity = document.getElementById("quantity");
            quantity.value = parseInt(quantity.value) + 1;
          }
        
          function decrement() {
            var quantity = document.getElementById("quantity");
            if (quantity.value > 0) {
              quantity.value = parseInt(quantity.value) - 1;
            }
          }
        


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


  function increment() {
      let quantity = document.getElementById('quantity');
      quantity.value = parseInt(quantity.value) + 1;
  }

  function decrement() {
      let quantity = document.getElementById('quantity');
      if (quantity.value > 0) {
          quantity.value = parseInt(quantity.value) - 1;
      }
  }



    function changeStep(step) {
      // Step details with images
      const steps = {
        1: { img: "resource/furniture-images/1.svg", title: "Step 1", desc: "Fill out the request form to get started with your furniture lease." },
        2: { img: "resource/furniture-images/2.svg", title: "Step 2", desc: "Our team will contact you to discuss the perfect arrangement for your furniture lease." },
        3: { img: "resource/furniture-images/3.svg", title: "Step 3", desc: "Your furniture will be delivered and set up at your location." }
      };

      // Update image, title, and description
      document.getElementById("stepIcon").src = steps[step].img;
      document.getElementById("stepTitle").textContent = steps[step].title;
      document.getElementById("stepDescription").textContent = steps[step].desc;

      // Handle missing images
      document.getElementById("stepIcon").onerror = function () {
        this.src = "resource/furniture-images/default.svg";
      };

      // Update active button
      document.querySelectorAll(".step-btn").forEach(btn => btn.classList.remove("active"));
      document.querySelectorAll(".step-btn")[step - 1].classList.add("active");
    }

    // Set the first step on page load
    window.onload = function () {
      changeStep(1);
    };
  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


      // Listen for form submission
      document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Create a new FormData object from the form
        var formData = new FormData(this);

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure the request (POST to PHP script)
        xhr.open("POST", "send_email.php", true);

        // Set up the callback for when the request completes
        xhr.onload = function () {
          if (xhr.status === 200) {
            alert("Thank you for your submission! We will get back to you soon.");
          } else {
            alert("Oops! Something went wrong. Please try again.");
          }
        };

        // Send the form data to the PHP script
        xhr.send(formData);
      });
    


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


        document.getElementById("seeMoreBtn").addEventListener("click", function () {
            let container = document.querySelector(".content-container");
            container.classList.toggle("expanded");

            if (container.classList.contains("expanded")) {
                this.textContent = "See Less"; // Change button text
            } else {
                this.textContent = "See More"; // Reset button text
            }
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.getElementById("seeMoreBtn").addEventListener("click", function () {
      let container = document.querySelector(".content-container");
      container.classList.toggle("expanded");

      if (container.classList.contains("expanded")) {
        this.textContent = "See Less"; // Change button text
      } else {
        this.textContent = "See More"; // Reset button text
      }
    });

  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        $(document).ready(function () {
            $(".price-switch button").click(function () {
                // Remove active class from all buttons
                $(".price-switch button").removeClass("active");

                // Add active class to clicked button
                $(this).addClass("active");

                // Update price and period
                let newPrice = $(this).data("price");
                let newPeriod = $(this).data("period");
                $("#price-value").text(newPrice);
                $("#price-period").text(newPeriod);
            });
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        $(document).ready(function () {
            $(".price-switch button").click(function () {
                // Remove active class from all buttons
                $(".price-switch button").removeClass("active");

                // Add active class to clicked button
                $(this).addClass("active");

                // Update price and period
                let newPrice = $(this).data("price");
                let newPeriod = $(this).data("period");
                $("#price-value").text(newPrice);
                $("#price-period").text(newPeriod);
            });
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        $(document).ready(function () {
            $(".price-switch button").click(function () {
                // Remove active class from all buttons
                $(".price-switch button").removeClass("active");

                // Add active class to clicked button
                $(this).addClass("active");

                // Update price and period
                let newPrice = $(this).data("price");
                let newPeriod = $(this).data("period");
                $("#price-value").text(newPrice);
                $("#price-period").text(newPeriod);
            });
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        $(document).ready(function () {
            $(".price-switch button").click(function () {
                // Remove active class from all buttons
                $(".price-switch button").removeClass("active");

                // Add active class to clicked button
                $(this).addClass("active");

                // Update price and period
                let newPrice = $(this).data("price");
                let newPeriod = $(this).data("period");
                $("#price-value").text(newPrice);
                $("#price-period").text(newPeriod);
            });
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        $(document).ready(function () {
            $(".price-switch button").click(function () {
                // Remove active class from all buttons
                $(".price-switch button").removeClass("active");

                // Add active class to clicked button
                $(this).addClass("active");

                // Update price and period
                let newPrice = $(this).data("price");
                let newPeriod = $(this).data("period");
                $("#price-value").text(newPrice);
                $("#price-period").text(newPeriod);
            });
        });
    


    document.addEventListener("DOMContentLoaded", function () {
        const navbar = document.querySelector(".navbar");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        });
    });



    $(document).ready(function () {
      $(".price-switch button").click(function () {
        // Remove active class from all buttons
        $(".price-switch button").removeClass("active");

        // Add active class to clicked button
        $(this).addClass("active");

        // Update price and period
        let newPrice = $(this).data("price");
        let newPeriod = $(this).data("period");
        $("#price-value").text(newPrice);
        $("#price-period").text(newPeriod);
      });
    });
  


  document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
          if (window.scrollY > 50) {
              navbar.classList.add("scrolled");
          } else {
              navbar.classList.remove("scrolled");
          }
      });
  });



        $(document).ready(function () {
            $(".price-switch button").click(function () {
                // Remove active class from all buttons
                $(".price-switch button").removeClass("active");

                // Add active class to clicked button
                $(this).addClass("active");

                // Update price and period
                let newPrice = $(this).data("price");
                let newPeriod = $(this).data("period");
                $("#price-value").text(newPrice);
                $("#price-period").text(newPeriod);
            });
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


      // Listen for form submission
      document.getElementById("contact-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the form from submitting normally

        // Create a new FormData object from the form
        var formData = new FormData(this);

        // Create a new XMLHttpRequest object
        var xhr = new XMLHttpRequest();

        // Configure the request (POST to PHP script)
        xhr.open("POST", "send_email.php", true);

        // Set up the callback for when the request completes
        xhr.onload = function () {
          if (xhr.status === 200) {
            alert("Thank you for your submission! We will get back to you soon.");
          } else {
            alert("Oops! Something went wrong. Please try again.");
          }
        };

        // Send the form data to the PHP script
        xhr.send(formData);
      });
    


    document.addEventListener("DOMContentLoaded", function () {
      const navbar = document.querySelector(".navbar");

      window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
      });
    });
  


    let audio = document.getElementById("hoverSound");

    document.querySelectorAll(".card").forEach(card => {
      card.addEventListener("mouseenter", () => {
        audio.currentTime = 0; // Audio restart karega
        audio.play();
      });
    });

  


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 1000, // Auto-scroll every 3 seconds
                disableOnInteraction: false // disableOnInteraction: false
            },
            breakpoints: {
                1024: { slidesPerView: 1.5 },
                768: { slidesPerView: 1.5 },
                576: { slidesPerView: 1.5 },
                400: { slidesPerView: 1.5 }
            },
            speed: 1000, // Set smooth animation speed
         
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 5,
            spaceBetween: 10,
            loop: true,
            autoplay: {
                delay: 1000, // Auto-scroll every 3 seconds
                disableOnInteraction: false // disableOnInteraction: false
            },
            breakpoints: {
                1024: { slidesPerView: 4 },
                768: { slidesPerView: 3 },
                576: { slidesPerView: 2 },
                400: { slidesPerView: 1 }
            },
            speed: 1000, // Set smooth animation speed
         


        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


    document.querySelectorAll('.toggle-switch').forEach(toggle => {
        toggle.addEventListener('click', () => {
            toggle.classList.toggle('active');
        });
    });



        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


                                function validateForm() {
                                    // Reset error messages
                                    document.getElementById('nameError').classList.add('d-none');
                                    document.getElementById('emailError').classList.add('d-none');
                                    document.getElementById('phoneError').classList.add('d-none');
                                    
                                    let valid = true;
                            
                                    // Name validation
                                    const name = document.getElementById('name').value;
                                    if (!name) {
                                        document.getElementById('nameError').classList.remove('d-none');
                                        valid = false;
                                    }
                            
                                    // Email validation
                                    const email = document.getElementById('email').value;
                                    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
                                    if (!email || !emailPattern.test(email)) {
                                        document.getElementById('emailError').classList.remove('d-none');
                                        valid = false;
                                    }
                            
                                    // Phone validation
                                    const phone = document.getElementById('phone').value;
                                    const phonePattern = /^[0-9]{10}$/;
                                    if (!phone || !phonePattern.test(phone)) {
                                        document.getElementById('phoneError').classList.remove('d-none');
                                        valid = false;
                                    }
                            
                                    return valid;
                                }
                            


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


        document.getElementById('enquiryForm').addEventListener('submit', function (event) {
            event.preventDefault();
            let nameField = document.getElementById('name');
            let nameError = document.getElementById('nameError');

            if (nameField.value.trim() === '') {
                nameError.classList.remove('d-none');
            } else {
                nameError.classList.add('d-none');
                alert('Form submitted successfully!');
            }
        });
    


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    


        document.addEventListener("DOMContentLoaded", function () {
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 1,
                spaceBetween: 20,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }
            });
        });

    


                function locationClick(city) {
                    if (city.startsWith('/')) {
                        // Agar relative URL hai (e.g., /virtual-space/virtual-space-indore.html)
                        window.location.href = city;
                    } else {
                        // Agar city ka naam hai, to usko ek URL me convert karenge
                        window.location.href = "http://127.0.0.1:5500/virtual-office/" + city.toLowerCase();
                    }
                }

            


                function openModal() {
                    document.getElementById('locationModal').style.display = 'flex';
                }

                function closeModal() {
                    document.getElementById('locationModal').style.display = 'none';
                }
            


        document.addEventListener("DOMContentLoaded", function () {
            const navbar = document.querySelector(".navbar");

            window.addEventListener("scroll", function () {
                if (window.scrollY > 50) {
                    navbar.classList.add("scrolled");
                } else {
                    navbar.classList.remove("scrolled");
                }
            });
        });
    


        let audio = document.getElementById("hoverSound");

        document.querySelectorAll(".card").forEach(card => {
            card.addEventListener("mouseenter", () => {
                audio.currentTime = 0; // Audio restart karega
                audio.play();
            });
        });

    