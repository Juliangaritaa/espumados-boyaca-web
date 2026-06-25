import { FooterData } from "@/data/footer";

export function Footer() {
  return (
    <footer
      id="footer"
      className="
        border-t
        bg-muted/30
      "
    >
      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          py-16
        "
      >
        <div
          className="
            grid
            gap-10

            md:grid-cols-3
          "
        >
          {/* Marca */}

          <div>
            <h3
              className="
                text-2xl
                font-bold
              "
            >
              {FooterData.name}
            </h3>

            <p
              className="
                mt-4
                text-muted-foreground
              "
            >
              Productos diseñados para brindarte comodidad, calidad y bienestar.
            </p>
          </div>

          {/* Contacto */}

          <div>
            <h4 className="font-semibold">Contacto</h4>

            <div
              className="
                mt-4
                space-y-2
                text-muted-foreground
              "
            >
              {FooterData.phones.map((phone) => (
                <p key={phone}>{phone}</p>
              ))}

              <p>{FooterData.address}</p>

              <p>{FooterData.email}</p>
            </div>
          </div>
        </div>

        <div
          className="
            mt-12
            border-t
            pt-6
            text-center
            text-sm
            text-muted-foreground
          "
        >
          © {new Date().getFullYear()} {FooterData.name}. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
