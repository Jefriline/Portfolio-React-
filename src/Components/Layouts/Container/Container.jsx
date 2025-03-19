import './Container.css';


const Container = ({ children }) => {
  return (
    <div className="container">
      <main className="content">
        {children}
      </main>
    </div>
  );
};



export default Container;
