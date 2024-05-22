export default function Layout({ children }) {
    return (
        <div className="laptop:px-20 tablet:px-16 px-8">
            {children}
        </div>
    );
  }