import { Pencil, Search, Building2, Phone, Mail, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { SiteSettings } from "@/types/site.settings";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useSettings } from "@/hooks/settings.hook";
import { SettingsForm } from "../components/SettingsForm";
import { toast } from 'react-toastify';
import { updateSetting } from "@/services/settings.service";
import { Input } from "@/components/ui/input";
import { Reveal } from "@/components/animations/Reveal";

export default function Settings() {
  const { settings, reload } = useSettings();
  const [open, setOpen] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState<SiteSettings | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  if (!settings) {
    return (
      <div className="flex h-48 items-center justify-center">
        <p className="text-sm text-muted-foreground animate-pulse">Cargando configuración...</p>
      </div>
    );
  }

  // Filtrado por si los campos coinciden con el término de búsqueda
  const isMatch =
    settings.company_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    settings.hero_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    settings.email.toLowerCase().includes(searchTerm.toLowerCase());

  const handleSubmit = async (values: SiteSettings) => {
    try {
      if (selectedSetting) {
        await updateSetting(selectedSetting.id, {
          ...values,
        });
      }
      toast.success("Configuración actualizada correctamente.");
      await reload();

      setOpen(false);
      setSelectedSetting(null);
    } catch (error) {
      console.error(error);
      toast.error("No fue posible actualizar la configuración");
    }
  };

  return (
    <div className="space-y-6 p-2 sm:p-6">
      <Reveal>
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>
        <p className="text-sm text-muted-foreground">
          Administra la información general y los datos de contacto del sitio.
        </p>
      </div>
      </Reveal>

    <Reveal>
      <Card className="border-border/40 shadow-sm">
        <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <CardDescription>
              Información visible en la cabecera, pie de página y sección principal.
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent className="space-y-4">
          {/* Barra de búsqueda para filtrar la fila de configuración */}
          <div className="flex items-center gap-2">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar por empresa, título o email..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          {/* Wrapper responsive para evitar desbordamiento en móviles */}
          <div className="relative w-full overflow-x-auto rounded-lg border">
            <Table className="w-full text-sm">
              <TableHeader className="bg-muted/50">
                <TableRow>
                  <TableHead className="min-w-[150px]">Compañía</TableHead>
                  <TableHead className="min-w-[180px]">Título Principal</TableHead>
                  <TableHead className="hidden md:table-cell min-w-[220px]">Descripción</TableHead>
                  <TableHead className="hidden lg:table-cell min-w-[140px]">Teléfonos</TableHead>
                  <TableHead className="min-w-[160px]">Email</TableHead>
                  <TableHead className="text-right">Acciones</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {!isMatch ? (
                  <TableRow>
                    <TableCell colSpan={6} className="h-24 text-center text-muted-foreground">
                      No se encontraron datos que coincidan con la búsqueda.
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow className="hover:bg-muted/30">
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Building2 className="h-4 w-4 shrink-0 text-muted-foreground" />
                        <span>{settings.company_name}</span>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 shrink-0 text-muted-foreground hidden sm:block" />
                        <span className="font-medium">{settings.hero_title}</span>
                      </div>
                    </TableCell>

                    <TableCell className="hidden md:table-cell max-w-xs truncate text-muted-foreground">
                      {settings.hero_description}
                    </TableCell>

                    <TableCell className="hidden lg:table-cell">
                      <div className="flex flex-col text-xs text-muted-foreground gap-1">
                        <span className="flex items-center gap-1">
                          <Phone className="h-3 w-3" /> {settings.phone_one}
                        </span>
                        {settings.phone_two && (
                          <span className="flex items-center gap-1 opacity-80">
                            <Phone className="h-3 w-3" /> {settings.phone_two}
                          </span>
                        )}
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-center gap-1.5 text-xs">
                        <Mail className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        <span>{settings.email}</span>
                      </div>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                          setSelectedSetting(settings);
                          setOpen(true);
                        }}
                      >
                        <Pencil className="h-4 w-4 text-muted-foreground" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
      </Reveal>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>Editar Configuración</DialogTitle>
          </DialogHeader>

          <SettingsForm
            defaultValues={selectedSetting ?? undefined}
            onSubmit={handleSubmit}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}