var expect = chai.expect;



//Pruebas para la clase Temperatura.
describe('#Temperatura',function()
{
  //Declaración de objetos de prueba
  var t1 = new Temperatura(100,"C");
  var t2 = new Temperatura(200,"F");
  var t3 = new Temperatura(300,"K");
  var c1 = new Celsius(10);
  var f1 = new Farenheit(20);
  var k1 = new Kelvin(400);

  beforeEach(function(){
    t1 = new Temperatura(100,"C");
    t2 = new Temperatura(200,"F");
    t3 = new Temperatura(300,"K");
    c1 = new Celsius(10);
    f1 = new Farenheit(20);
    k1 = new Kelvin(400);
  })

  describe('Construccion',function()
  {
    it('Los objetos t1,t2 y t3 son instancias de la clase Temperatura y Medida',function()
    {

        expect(t1).to.exist;
        expect(t1).to.not.be.null;

        expect(t2).to.exist;
        expect(t2).to.not.be.null;

        expect(t3).to.exist;
        expect(t3).to.not.be.null;
    });
    it('Se crea un objeto de tipo Celsius',function()
    {

        expect(c1).to.exist;
    });
    it('Para el objeto Celsius, existe un metodo toFarenheit y toKelvin',function()
    {
        expect(c1).to.respondTo('toFarenheit');
        expect(c1).to.respondTo('toKelvin');
    })
    it('Se crea un objeto de tipo Farenheit',function()
    {
        expect(f1).to.exist;
    });
    it('Para el objeto Farenheit, existe un metodo toCelsius y toKelvin',function()
    {
        expect(f1).to.respondTo('toCelsius');
        expect(f1).to.respondTo('toKelvin');
    });
    it('Se crea un objeto de tipo Kelvin',function()
    {
        expect(k1).to.exist;
    });
    it('Para un objeto Kelvin, existe un metodo toCelsius y toFarenheit',function()
    {
        expect(k1).to.respondTo('toCelsius');
        expect(k1).to.respondTo('toFarenheit');
    });
  });
  describe('Conversiones',function()
  {
    describe('Desde Celsius...',function()
    {
      it('10 C to F = 50 Farenheit',function()
      {
          expect(Medida.convertir('10C to F')).to.equal('50 Farenheit');
      });
     
      
    });
    describe('Desde Farenheit...',function()
    {
      it('20 F to C = -6.666666666666667 Celsius',function()
      {
          expect(Medida.convertir('20 F to C')).to.equal('-6.666666666666667 Celsius');
      });
    
     
    });
    describe('Desde kelvin...',function()
    {
      it('400 K to C != 0 Celsius',function()
      {
          expect(Medida.convertir('400 K to C')).to.not.equal('0 Celsius');
      });
      
      
    });

    it('Si el destino es igual que la unidad de origen, se devuelve lo mismo como por ejemplo: 32 C to C = 32 c',function()
    {
        expect(Medida.convertir('32C to C')).to.be.equal('32 c');
        expect(Medida.convertir('32F to F')).to.be.equal('32 f');
        expect(Medida.convertir('32K to K')).to.be.equal('32 k');
    });
    it('Conversiones con numeros con e: 1.2e1 F to K',function()
    {
        expect(Medida.convertir('1.2e1F to K')).to.be.equal('262.0388888888889 Kelvin')
    });
    it('En la expresion puede ponerse el to o no: 1.2e1F K',function()
    {
        expect(Medida.convertir('1.2e1F K')).to.be.equal('262.0388888888889 Kelvin')
    });
    it('En la expresion pueden ponerse espacios entre las unidades, al final y al principio: 1.2e1   F   to    K',function()
    {
        expect(Medida.convertir('   1.2e1   F   to    K     ')).to.be.equal('262.0388888888889 Kelvin')
    });
  });
});

 
