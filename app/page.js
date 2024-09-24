import React from 'react';

const Page = ({ searchParams }) => {
  // Genre parametresini al
  const genre = searchParams.genre;

  return (
    <div>
      {genre === 'travel' ? (
        <div>
          <h1>Gezi İçerikleri</h1>
          <p>Burada gezi ile ilgili içerikler yer alacak.</p>
          {/* Burada gezi ile ilgili verileri çekmek ve göstermek için gerekli bileşeni ekleyebilirsiniz */}
        </div>
      ) : genre === 'cook' ? (
        <div>
          <h1>Yemek Tarifleri</h1>
          <p>Burada yemek tarifleri ile ilgili içerikler yer alacak.</p>
          {/* Burada yemek tarifleri ile ilgili verileri çekmek ve göstermek için gerekli bileşeni ekleyebilirsiniz */}
        </div>
      ) : genre === 'suggestion' ? (
        <div>
          <h1>Dizi-Film Önerileri</h1>
          <p>Burada dizi-film önerileri ile ilgili içerikler yer alacak.</p>
          {/* Burada dizi-film önerileri ile ilgili verileri çekmek ve göstermek için gerekli bileşeni ekleyebilirsiniz */}
        </div>
      ) : (
        <div>
          <h1>anasayfa</h1>
          <p></p>
        </div>
      )}
    </div>
  );
};

export default Page;
