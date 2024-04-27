import React from 'react';


export default function About() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
      <div style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center' }}>Loveable Paws Adoption Emporium</h2>
        <p>
          Loveable Paws Adoption Emporium is a pet adoption and accessories shop dedicated to promoting responsible pet ownership and facilitating loving adoptions for pets in need. Our mission is to create a harmonious bond between pets and their owners by offering a wide range of high-quality accessories while also providing a platform for pets to find their forever homes.
        </p>
        <h3>Our Values</h3>
        <ul>
          <li>
            <strong>Compassion:</strong> We believe in showing empathy and care towards every pet that comes through our doors, ensuring their well-being and happiness.
          </li>
          <li>
            <strong>Rescue and Adoption:</strong> We are committed to rescuing and rehoming pets from shelters and providing them with a second chance at a loving home.
          </li>
          <li>
            <strong>Quality Products:</strong> We offer a curated selection of pet accessories that are not only stylish but also promote the health and comfort of pets.
          </li>
          <li>
            <strong>Education:</strong> We strive to educate our community about responsible pet ownership, including proper care, training, and the importance of spaying/neutering.
          </li>
          <li>
            <strong>Community Engagement:</strong> We actively engage with our community through adoption events, educational workshops, and partnerships with local animal welfare organizations.
          </li>
        </ul>
        <p>
          Loveable Paws Adoption Emporium is more than just a pet shop; it's a place where pet lovers come together to make a positive impact on the lives of animals. Join us in our mission to create happy tails and loving homes for pets in need.
        </p>
      </div>
    </div>
  );
}
