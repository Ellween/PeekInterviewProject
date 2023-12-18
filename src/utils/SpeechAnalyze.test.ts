import { ISpeech } from "../interfaces/ISpeech";
import { fewestWordsUsed, mostSpeeches2013, mostSpeechesOnInternalSecurity } from "./SpeechAnalyze";

describe('mostSpeeches2013', () => {
    it('should return the speaker with the most speeches in 2013', () => {
      const mockSpeeches = [
        { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2013-10-30', Words: 5310 },
        { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 },
        { Speaker: 'Caesare Collins', Topic: 'Coal Subsidies', Date: '2012-11-06', Words: 1119 },
        { Speaker: 'Alexander Abel', Topic: 'Internal Security', Date: '2012-12-11', Words: 1911 },
      ];
  
      const result = mostSpeeches2013(mockSpeeches);
      expect(result).toBe('Alexander Abel'); // Updated expected result
    });

  it('should return null if no speeches were made in 2013', () => {
    const mockSpeeches = [
        { Speaker: 'Alexander Abel', Topic: 'Education Policy', Date: '2012-10-30', Words: 5310 },
        { Speaker: 'Bernhard Belling', Topic: 'Coal Subsidies', Date: '2012-11-05', Words: 1210 },
    ];

    const result = mostSpeeches2013(mockSpeeches);
    expect(result).toBeNull();
  });
});

describe('mostSpeechesOnInternalSecurity', () => {
    it('should return the speaker with the most speeches on internal security', () => {
      const mockSpeeches = [
        { Speaker: 'Alice', Topic: 'Internal Security', Date: '2013-01-01', Words: 500 },
        { Speaker: 'Bob', Topic: 'Education', Date: '2013-02-01', Words: 300 },
        { Speaker: 'Alice', Topic: 'Internal Security', Date: '2013-03-01', Words: 700 },
        { Speaker: 'Carol', Topic: 'Internal Security', Date: '2012-01-01', Words: 600 },
      ];
  
      const result = mostSpeechesOnInternalSecurity(mockSpeeches);
      expect(result).toBe('Alice');
    });
  
    it('should return a message if no speeches on internal security', () => {
      const mockSpeeches = [
        { Speaker: 'Alice', Topic: 'Education', Date: '2013-01-01', Words: 500 },
        { Speaker: 'Bob', Topic: 'Education', Date: '2013-02-01', Words: 300 },
      ];
  
      const result = mostSpeechesOnInternalSecurity(mockSpeeches);
      expect(result).toBeNull();
    });
  });

  describe('fewestWordsUsed', () => {
    it('should return the speaker who used the fewest words', () => {
      const mockSpeeches = [
        { Speaker: 'Alice', Topic: 'Education', Date: '2013-01-01', Words: 500 },
        { Speaker: 'Bob', Topic: 'Education' , Date: '2013-02-01', Words: 300 },
        { Speaker: 'Carol', Topic: 'Education' , Date: '2012-01-01', Words: 600 },
      ];
  
      const result = fewestWordsUsed(mockSpeeches);
      expect(result).toBe('Bob');
    });
  
    it('should return a message if no data is available', () => {
      const mockSpeeches: ISpeech[] = [];
  
      const result = fewestWordsUsed(mockSpeeches);
      expect(result).toBeNull();
    });
  });