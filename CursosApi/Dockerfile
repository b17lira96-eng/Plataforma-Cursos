
# Compilação da API com .NET 10
FROM mcr.microsoft.com/dotnet/sdk:10.0 AS build

WORKDIR /src

COPY CursosApi.csproj ./
RUN dotnet restore CursosApi.csproj

COPY . ./
RUN dotnet publish CursosApi.csproj -c Release -o /app/publish --no-restore
# Imagem de execução
FROM mcr.microsoft.com/dotnet/aspnet:10.0 AS final

WORKDIR /app

COPY --from=build /app/publish ./

ENV ASPNETCORE_ENVIRONMENT=Production
ENV ASPNETCORE_URLS=http://0.0.0.0:10000

EXPOSE 10000

ENTRYPOINT ["dotnet", "CursosApi.dll"]
